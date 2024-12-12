import type { UiCalendarCard } from '../interfaces/christmas-calendar-data';
import calendarData from './../../../../../public/content/angular-calendar.json';
import {Injectable, Signal, computed, inject} from '@angular/core';
import {CardStorageService} from './card-storage.service';
import { VisitedDay } from '../interfaces/visited-day';

function processDays(visitedDays: VisitedDay[], dayOfCardToReveal: number): UiCalendarCard[] {
  return calendarData.data.map((card) => {
    const hasContents = card.contents.length > 0;
    const visitedDayNums = visitedDays.map(visitedDay => visitedDay.day);
    const visitedDay = visitedDays.find(visitedDay => visitedDay.day == card.day);

    const canReveal = hasContents || visitedDay?.status == "open";
    const revealed = hasContents && visitedDayNums.includes(card.day) && visitedDay?.status == "open";
    const canAnimate = dayOfCardToReveal == card.day && !revealed;

    return {
      ...card,
      revealed,
      canReveal,
      canAnimate,
      status: visitedDay?.status ?? "closed"
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
    const visitedDays = this.cardStorageService.visitedDays;
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
