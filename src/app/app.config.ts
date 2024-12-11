import type { ApplicationConfig } from '@angular/core';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {afterNextRender, inject, provideAppInitializer} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import { CardStorageService } from './feature/calendar/services/card-storage.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    // Note: It could be useful to define which card should have reveal ability.
    // {provide: OVERRIDE_CARD_INDEX_TO_REVEAL, useValue: 2},
    provideAppInitializer(() => {
      const cardStorageService = inject(CardStorageService);

      afterNextRender(() => {
        cardStorageService.init();
      });
    })
  ],
};
