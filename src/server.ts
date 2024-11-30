import { AngularAppEngine } from '@angular/ssr';
import { AngularNodeAppEngine, createNodeRequestHandler, isMainModule, writeResponseToNodeResponse } from '@angular/ssr/node';
import fastifyStatic from '@fastify/static';
import { getContext } from '@netlify/angular-runtime/context';
import type { FastifyInstance } from 'fastify';
import fastify from 'fastify';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export async function netlifyAppEngineHandler(request: Request): Promise<Response> {
  const context = getContext();
  const angularAppEngine = new AngularAppEngine();

  const result = await angularAppEngine.handle(request, context);
  return result || new Response('Not found', { status: 404 });
}

export function createServer(): FastifyInstance {
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');

  const server = fastify({
    disableRequestLogging: true,
  });

  server.register(fastifyStatic, {
    root: browserDistFolder,
    maxAge: '1y',
    // If set to true it will create a '/' get route and we don't want that
    index: false,
    // Need to be false, else we won't be able to create a wildcard route
    wildcard: false,
  });

  const angularNodeAppEngine = new AngularNodeAppEngine();

  /**
   * Handle all requests by rendering the Angular application.
   */
  server.get('*', async (req, reply) => {
    try {
      const response = await angularNodeAppEngine.handle(req.raw);

      if (response) {
        await writeResponseToNodeResponse(response, reply.raw);
      }
    } catch (error) {
      reply.send(error);
    }
  });

  return server;
}

const server = createServer();

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = parseInt(process.env['PORT'] ?? '4000', 10) || 4000;

  server.listen({ port }, () => {
    console.log(`Fastify server listening on http://localhost:${port}`);
  });
}

/**
 * The request handler used by the Angular CLI (dev-server and during build).
 */
export const reqHandler = createNodeRequestHandler(async (req, res) => {
  await server.ready();

  server.server.emit('request', req, res);
});
