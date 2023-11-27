import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {
  END_DATE,
  OVERRIDE_CARD_INDEX_TO_REVEAL,
  START_DATE,
} from './feature/calendar/providers/date-range';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    {provide: START_DATE, useValue: new Date(2023, 11, 1)},
    {provide: END_DATE, useValue: new Date(2023, 11, 24)},
    // TODO: remove once implementation will be done
    {provide: OVERRIDE_CARD_INDEX_TO_REVEAL, useValue: 3},
  ],
};
