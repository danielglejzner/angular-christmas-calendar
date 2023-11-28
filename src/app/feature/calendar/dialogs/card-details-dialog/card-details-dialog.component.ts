import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DIALOG_DATA, DialogRef} from '@angular/cdk/dialog';
import {UiCalendarCard} from '../../interfaces/christmas-calendar-data';
import {TwitterUrlPipe} from '../../pipes/twitter-url.pipe';
import {CalendarCardFactoryDirective} from '../../cards/calendar-card-factory.directive';
import { CalendarService } from '../../services/calendar.service';

@Component({
  selector: 'xmas-card-details-dialog',
  standalone: true,
  imports: [CommonModule, CalendarCardFactoryDirective, TwitterUrlPipe],
  templateUrl: './card-details-dialog.component.html',
  styleUrl: './card-details-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardDetailsDialogComponent {
  public dialogRef = inject(DialogRef<string>);
  public data = inject<UiCalendarCard>(DIALOG_DATA);

  private calendarService = inject(CalendarService);

  closeDialog() {
    if (this.calendarService.isTodaysCard(this.data) && !this.calendarService.hasTodaysCardBeenOpened(this.data)) {
      this.dialogRef.close('not-opened');
    }

    this.dialogRef.close('already-opened');
  }
}
