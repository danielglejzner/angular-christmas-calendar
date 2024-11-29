import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./feature/calendar/calendar-grid.component').then((c) => c.CalendarGridComponent),
  },
];
