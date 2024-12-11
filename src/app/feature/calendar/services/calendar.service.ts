import type { UiCalendarCard } from '../interfaces/christmas-calendar-data';
import calendarData from './../../../../../public/content/angular-calendar.json';
import {Injectable, Signal, computed, inject} from '@angular/core';
import {CardStorageService} from './card-storage.service';

function processDays(visitedDays: number[], dayOfCardToReveal: number): UiCalendarCard[] {
  return calendarData.data.map((card) => {
    const hasContents = card.contents.length > 0;

    const canReveal = hasContents;
    const revealed = canReveal && visitedDays.includes(card.day);
    const canAnimate = dayOfCardToReveal == card.day && !revealed;

    return {
      ...card,
      revealed,
      canReveal,
      canAnimate,
    };
  });
}

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  private readonly cardStorageService = inject(CardStorageService);
  private readonly dayOfCardToReveal = this.getLastContentDay();

  readonly cards: Signal<UiCalendarCard[]> = computed(() => {
    const visitedDays = this.cardStorageService.visitedDays();
    return processDays(visitedDays, this.dayOfCardToReveal)
  });

  private getLastContentDay(): number {
    let lastDay = 1;
    calendarData.data.forEach((card) => {
      if (card.contents.length > 0) {
        lastDay = card.day;
      }
    });
    return lastDay;
  }
}
