import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {CalendarCardFactoryDirective} from './cards/calendar-card-factory.directive';
import {CalendarService} from './services/calendar.service';
import {DialogModule} from '@angular/cdk/dialog';
import {TwitterUrlPipe} from './pipes/twitter-url.pipe';
import {ShakeWhenDisabledDirective} from './directives/shake-on-click.directive';
import {OpenDetailsDialogDirective} from './directives/open-details-dialog.directive';

@Component({
  selector: 'xmas-calendar-grid',
  standalone: true,
  imports: [
    CommonModule,
    CalendarCardFactoryDirective,
    DialogModule,
    NgOptimizedImage,
    OpenDetailsDialogDirective,
    TwitterUrlPipe,
    ShakeWhenDisabledDirective,
  ],
  templateUrl: './calendar-grid.component.html',
  styleUrl: './calendar-grid.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarGridComponent {
  private readonly calendarService = inject(CalendarService);
  cards = this.calendarService.cards;
}
