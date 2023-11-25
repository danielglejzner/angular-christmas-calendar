import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { UiCalendarCard } from '../../interfaces/christmas-calendar-data';
import { TwitterUrlPipe } from '../../pipes/twitter-url.pipe';
import { CalendarCardFactoryDirective } from '../../cards/calendar-card-factory.directive';

@Component({
  selector: 'xmas-card-details-dialog',
  standalone: true,
  imports: [CommonModule, CalendarCardFactoryDirective, TwitterUrlPipe],
  templateUrl: './card-details-dialog.component.html',
  styleUrl: './card-details-dialog.component.css'
})
export class CardDetailsDialogComponent implements OnInit {

  public dialogRef = inject(DialogRef<string>);
  public data = inject<UiCalendarCard>(DIALOG_DATA);

  ngOnInit(): void {
    console.log(this.data);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
