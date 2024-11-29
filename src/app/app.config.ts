import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    // Note: It could be useful to define which card should have reveal ability.
    // {provide: OVERRIDE_CARD_INDEX_TO_REVEAL, useValue: 2},
  ],
};
