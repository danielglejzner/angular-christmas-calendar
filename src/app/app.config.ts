import type { ApplicationConfig } from '@angular/core';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    // Note: It could be useful to define which card should have reveal ability.
    // {provide: OVERRIDE_CARD_INDEX_TO_REVEAL, useValue: 2},
  ],
};
