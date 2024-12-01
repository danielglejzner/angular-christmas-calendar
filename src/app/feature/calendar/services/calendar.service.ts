import { Injectable, inject } from '@angular/core';
import type { UiCalendarCard } from '../interfaces/christmas-calendar-data';
import { OVERRIDE_CARD_INDEX_TO_REVEAL } from '../providers/date-range';
import calendarData from './../../../../../public/content/angular-calendar.json';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  private readonly overrideCardIndexToReveal = inject(OVERRIDE_CARD_INDEX_TO_REVEAL, {
    optional: true,
  });

  private readonly cardIndexToReveal = this.overrideCardIndexToReveal ?? this.getLastContentIndex();

  readonly cards: UiCalendarCard[] = calendarData.data.map((card) => {
    const hasContents = card.contents.length > 0;
    return {
      ...card,
      revealed: hasContents && card.day <= this.cardIndexToReveal,
      canReveal: hasContents,
    };
  });

  private getLastContentIndex(): number {
    let lastIndex = 0;
    calendarData.data.forEach((card, index) => {
      if (card.contents.length > 0) {
        lastIndex = index;
      }
    });
    return lastIndex;
  }
}
