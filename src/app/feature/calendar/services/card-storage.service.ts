import {Injectable, computed, signal} from '@angular/core';

@Injectable({providedIn: 'root'})
export class CardStorageService {
  private _visitedDays = signal<string>('');

  visitedDays = computed(() => {
    const storedDays = this._visitedDays();

    if (storedDays) {
      return storedDays.split(',').map(Number);
    }

    return [];
  });

  init() {
    const visitedDays = localStorage.getItem('visitedDays');
    if (visitedDays) {
      this._visitedDays.set(visitedDays);
    }
  }

  storeAsVisited(day: number) {
    this._visitedDays.update((prevDays) => {
      if (prevDays) {
        return `${prevDays},${day}`;
      }

      return `${day}`;
    });

    localStorage.setItem('visitedDays', this._visitedDays());
  }
}
