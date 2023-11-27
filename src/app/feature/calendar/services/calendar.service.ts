import {Injectable, inject} from '@angular/core';
import calendarData from './../../../../assets/content/angular-calendar.json';
import {UiCalendarCard} from '../interfaces/christmas-calendar-data';
import {END_DATE, OVERRIDE_CARD_INDEX_TO_REVEAL, START_DATE} from '../providers/date-range';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  private readonly startDate = inject(START_DATE);
  private readonly endDate = inject(END_DATE);
  private readonly now = new Date();

  // TODO: remove once implementation will be done
  private readonly overrideCardIndexToReveal = inject(OVERRIDE_CARD_INDEX_TO_REVEAL);

  get cardIndexToReveal(): number {
    // TODO: remove once implementation will be done
    if (this.overrideCardIndexToReveal) {
      return this.overrideCardIndexToReveal;
    }

    if (this.startDate > this.now || this.endDate < this.now) return -1;

    return this.now.getDate();
  }

  readonly cards: UiCalendarCard[] = calendarData.data.map((card) => ({
    ...card,
    revealed: card.day < this.cardIndexToReveal,
    canReveal: card.day === this.cardIndexToReveal,
  }));
}
