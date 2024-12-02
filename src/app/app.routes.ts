import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./feature/calendar/calendar-grid.component').then((c) => c.CalendarGridComponent),
  },
  // Fallback route, in this case just redirect to the home page
  {
    path: '**',
    redirectTo: '',
  },
];
