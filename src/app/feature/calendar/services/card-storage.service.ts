import { Injectable, computed, signal } from '@angular/core';
import { VisitedDay } from '../interfaces/visited-day';

@Injectable({ providedIn: 'root' })
export class CardStorageService {
  private _visitedDays = signal<VisitedDay[]>([]);

  get visitedDays() {
    return this._visitedDays();
  }

  init() {
    let visitedDays = localStorage.getItem('visitedDays');
    if (visitedDays) {
      let parsedVisitedDays: VisitedDay[] | string = "";
      if (visitedDays.includes("{")) {
        parsedVisitedDays = JSON.parse(visitedDays);
      } else {
        parsedVisitedDays = visitedDays;
      }

      if (typeof parsedVisitedDays == 'string') {
        const mappedVisitedDays = parsedVisitedDays.split(',').map((visitedDay) => ({ day: Number(visitedDay), status: "open" as "open" | "closed" }));
        this._visitedDays.set(mappedVisitedDays);
        localStorage.setItem('visitedDays', JSON.stringify(this._visitedDays()));
      } else {
        this._visitedDays.set(parsedVisitedDays);
      }
    }
  }

  storeAsVisited(day: number, status: 'open' | 'closed') {
    this._visitedDays.update((prevDays) => {
      if (prevDays.length) {
        const existingDay = prevDays.find((prevDay) => prevDay.day == day);
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
