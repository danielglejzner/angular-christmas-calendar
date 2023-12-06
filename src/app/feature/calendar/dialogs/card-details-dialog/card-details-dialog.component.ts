import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DIALOG_DATA, DialogRef} from '@angular/cdk/dialog';
import {Content, UiCalendarCard} from '../../interfaces/christmas-calendar-data';
import {TwitterUrlPipe} from '../../pipes/twitter-url.pipe';
import {CalendarCardFactoryDirective} from '../../cards/calendar-card-factory.directive';
import {SafePipe} from '../../pipes/safe.pipe';

@Component({
  selector: 'xmas-card-details-dialog',
  standalone: true,
  imports: [CommonModule, CalendarCardFactoryDirective, SafePipe, TwitterUrlPipe],
  templateUrl: './card-details-dialog.component.html',
  styleUrl: './card-details-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardDetailsDialogComponent {
  public dialogRef = inject(DialogRef<void>);
  public data = inject<UiCalendarCard>(DIALOG_DATA);

  protected selectedContent = signal<Content | null>(
    this.data.contents?.length === 1 ? this.data.contents[0] : null,
  );

  closeDialog() {
    this.dialogRef.close();
  }
}
