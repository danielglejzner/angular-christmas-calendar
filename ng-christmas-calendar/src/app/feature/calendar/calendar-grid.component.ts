import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarCardFactoryDirective } from './cards/calendar-card-factory.directive';
import { CalendarService } from './services/calendar.service';

@Component({
  selector: 'xmas-calendar-grid',
  standalone: true,
  imports: [CommonModule, CalendarCardFactoryDirective],
  templateUrl: './calendar-grid.component.html',
  styleUrl: './calendar-grid.component.css'
})
export class CalendarGridComponent {
  private readonly calendarService = inject(CalendarService);

  cards = this.calendarService.cards;
}
