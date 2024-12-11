import { Injectable, computed, signal } from '@angular/core';
import { VisitedDay } from '../interfaces/visited-day';

@Injectable({ providedIn: 'root' })
export class CardStorageService {
  private _visitedDays = signal<VisitedDay[]>([]);

  get visitedDays() {
    return this._visitedDays();
  }

  init() {
    const visitedDays = localStorage.getItem('visitedDays');
    if (visitedDays) {
      this._visitedDays.set(JSON.parse(visitedDays));
    }
  }

  storeAsVisited(day: number, status: 'open' | 'closed') {
    this._visitedDays.update((prevDays) => {
      if (prevDays.length) {
        const existingDay = prevDays.find(prevDay => prevDay.day == day);
        if (existingDay) {
          existingDay.status = status;

          return [...prevDays];
        }

        return [...prevDays, { day, status }];
      }

      return [{ day, status }];
    });

    localStorage.setItem('visitedDays', JSON.stringify(this._visitedDays()));
  }
}
