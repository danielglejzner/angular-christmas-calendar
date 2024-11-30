import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { AngularNodeAppEngine, createNodeRequestHandler, isMainModule, writeResponseToNodeResponse } from '@angular/ssr/node';
import { getContext as getNetlifyContext } from '@netlify/angular-runtime/context';
import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const angularAppEngine = new AngularAppEngine();
const netlifyContext = getNetlifyContext();

export async function netlifyAppEngineHandler(request: Request): Promise<Response> {
  const result = await angularAppEngine.handle(request, netlifyContext);
  return result || new Response('Not found', { status: 404 });
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function createServer() {
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');

  const server = express();

  /**
   * Serve static files from /browser
   */
  server.use(
    express.static(browserDistFolder, {
      maxAge: '1y',
      index: false,
      redirect: false,
    }),
  );

  const angularNodeAppEngine = new AngularNodeAppEngine();

  /**
   * Handle all requests by rendering the Angular application.
   */
  server.use('/**', (req, res, next) => {
    angularNodeAppEngine
      .handle(req)
      .then((response) => (response ? writeResponseToNodeResponse(response, res) : next()))
      .catch(next);
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

  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * The request handler used by the Angular CLI (dev-server and during build).
 */

const nodeRequestHandle = createNodeRequestHandler(server);
const netlifyRequestHandler = createRequestHandler(netlifyAppEngineHandler);

export const reqHandler = netlifyContext ? netlifyRequestHandler : nodeRequestHandle;
