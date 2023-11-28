import {Injectable, inject} from '@angular/core';
import calendarData from './../../../../assets/content/angular-calendar.json';
import {CalendarCard, UiCalendarCard} from '../interfaces/christmas-calendar-data';
import {OVERRIDE_CARD_INDEX_TO_REVEAL} from '../providers/date-range';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  #document = inject(DOCUMENT);

  private readonly overrideCardIndexToReveal = inject(OVERRIDE_CARD_INDEX_TO_REVEAL, {
    optional: true,
  });
  private readonly cardIndexToReveal =
    this.overrideCardIndexToReveal ?? calendarData.data.filter((day) => !!day.content).length;

  readonly cards: UiCalendarCard[] = calendarData.data.map((card) => ({
    ...card,
    isCardOfDay: this.isTodaysCard(card),
    revealed: card.day < this.cardIndexToReveal || this.hasTodaysCardBeenOpened(card),
    canReveal: this.isTodaysCard(card) && !this.hasTodaysCardBeenOpened(card)
  }));

  persistCardOpenState(card: UiCalendarCard) {
    if (this.#document.defaultView?.localStorage) {
      this.#document.defaultView.localStorage.setItem('opCard', `Card#${card.day}`);
    }
  }

  isTodaysCard(card: CalendarCard) {
    return card.day === this.cardIndexToReveal;
  }

  hasTodaysCardBeenOpened(card: CalendarCard) {
    return this.getCardOpenState(card);
  }

  private getCardOpenState(card: CalendarCard) {
    if (this.#document.defaultView?.localStorage) {
      return this.#document.defaultView.localStorage.getItem('opCard') == `Card#${card.day}`;
    }

    return false;
  }
}
