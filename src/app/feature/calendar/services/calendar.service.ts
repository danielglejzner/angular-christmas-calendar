import { Injectable, inject } from '@angular/core';
import calendarData from './../../../../assets/content/angular-calendar.json';
import { UiCalendarCard } from '../interfaces/christmas-calendar-data';
import { OVERRIDE_CARD_INDEX_TO_REVEAL } from '../providers/date-range';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  private readonly overrideCardIndexToReveal = inject(OVERRIDE_CARD_INDEX_TO_REVEAL, {
    optional: true,
  });

  private readonly cardIndexToReveal =
    this.overrideCardIndexToReveal ??
    calendarData.data.findIndex((day) => day.contents.length > 0);

  readonly cards: UiCalendarCard[] = calendarData.data.map((card) => {
    const hasContents = card.contents.length > 0;
    return {
      ...card,
      revealed: hasContents && card.day < this.cardIndexToReveal,
      canReveal: hasContents && card.day === this.cardIndexToReveal,
    };
  });
}
