import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { UiCalendarCard } from '../../interfaces/christmas-calendar-data';

@Component({
  selector: 'xmas-card-details-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-details-dialog.component.html',
  styleUrl: './card-details-dialog.component.css'
})
export class CardDetailsDialogComponent implements OnInit {
  public dialogRef = inject(DialogRef<string>);
  public data = inject<UiCalendarCard>(DIALOG_DATA);

  ngOnInit(): void {
    console.log(this.data);
  }
}
