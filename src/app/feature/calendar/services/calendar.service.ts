import {Injectable, inject} from '@angular/core';
import calendarData from './../../../../assets/content/angular-calendar.json';
import {UiCalendarCard} from '../interfaces/christmas-calendar-data';
import {OVERRIDE_CARD_INDEX_TO_REVEAL} from '../providers/date-range';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  private readonly overrideCardIndexToReveal = inject(OVERRIDE_CARD_INDEX_TO_REVEAL, {
    optional: true,
  });
  private readonly cardIndexToReveal =
    this.overrideCardIndexToReveal ?? calendarData.data.filter((day) => !!day.content).length;

  readonly cards: UiCalendarCard[] = calendarData.data.map((card) => ({
    ...card,
    revealed: card.day < this.cardIndexToReveal,
    canReveal: card.day === this.cardIndexToReveal,
  }));
}
