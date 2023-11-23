import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./feature/calendar/calendar-grid/calendar-grid.component').then(c => c.CalendarGridComponent)
  }
];
