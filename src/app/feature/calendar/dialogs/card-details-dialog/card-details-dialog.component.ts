import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CalendarCardFactoryDirective } from '../../cards/calendar-card-factory.directive';
import type { Content, UiCalendarCard } from '../../interfaces/christmas-calendar-data';
import { SafePipe } from '../../pipes/safe.pipe';
import { SocialProfileUrlPipe } from '../../pipes/social-profile-url.pipe';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'xmas-card-details-dialog',
  imports: [
    CalendarCardFactoryDirective,
    SafePipe,
    SocialProfileUrlPipe,
    NgTemplateOutlet
  ],
  templateUrl: './card-details-dialog.component.html',
  styleUrl: './card-details-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardDetailsDialogComponent {
  public dialogRef = inject(DialogRef<void>);
  public data = inject<UiCalendarCard>(DIALOG_DATA);

  protected selectedContent = signal<Content | null>(this.data.contents?.length === 1 ? this.data.contents[0] : null);

  closeDialog(): void {
    this.dialogRef.close();
  }
}
