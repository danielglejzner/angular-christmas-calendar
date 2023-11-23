import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChristmasCardType } from './cards/christmas-card';
import { CalendarCardFactoryDirective } from './cards/calendar-card-factory.directive';

@Component({
  selector: 'app-calendar-grid',
  standalone: true,
  imports: [CommonModule, CalendarCardFactoryDirective],
  templateUrl: './calendar-grid.component.html',
  styleUrl: './calendar-grid.component.css'
})
export class CalendarGridComponent {
  // TODO: build based on content json
  days = Object.values(ChristmasCardType).filter(value => typeof value === 'number') as ChristmasCardType[];
}
