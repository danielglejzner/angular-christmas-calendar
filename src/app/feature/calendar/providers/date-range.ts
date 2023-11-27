import {InjectionToken} from '@angular/core';

export const START_DATE = new InjectionToken<Date>('START_DATE');
export const END_DATE = new InjectionToken<Date>('END_DATE');

// TODO: remove once implementation will be done
export const OVERRIDE_CARD_INDEX_TO_REVEAL = new InjectionToken<number>(
  'OVERRIDE_CARD_INDEX_TO_REVEAL',
);
