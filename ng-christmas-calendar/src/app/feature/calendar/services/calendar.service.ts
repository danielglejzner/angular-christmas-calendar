import { Injectable } from '@angular/core';
import calendarData from './../../../../assets/content/angular-calendar.json';
import { CalendarCard } from '../interfaces/christmas-calendar-data';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  readonly cards: CalendarCard[] = calendarData.data;
}
