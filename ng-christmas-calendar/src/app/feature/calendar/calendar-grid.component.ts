import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarCardFactoryDirective } from './cards/calendar-card-factory.directive';
import { ChristmasCardType } from './enums/christmas-card-type';

@Component({
  selector: 'xmas-calendar-grid',
  standalone: true,
  imports: [CommonModule, CalendarCardFactoryDirective],
  templateUrl: './calendar-grid.component.html',
  styleUrl: './calendar-grid.component.css'
})
export class CalendarGridComponent {
  // TODO: build based on content json
  days = Object.values(ChristmasCardType).filter(value => typeof value === 'number') as ChristmasCardType[];
}
