import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalendarCardFactoryDirective} from './cards/calendar-card-factory.directive';
import {CalendarService} from './services/calendar.service';
import {Dialog, DialogModule} from '@angular/cdk/dialog';
import {UiCalendarCard} from './interfaces/christmas-calendar-data';
import {CardDetailsDialogComponent} from './dialogs/card-details-dialog/card-details-dialog.component';
import {TwitterUrlPipe} from './pipes/twitter-url.pipe';
import { map, take } from 'rxjs';

@Component({
  selector: 'xmas-calendar-grid',
  standalone: true,
  imports: [CommonModule, CalendarCardFactoryDirective, DialogModule, TwitterUrlPipe],
  templateUrl: './calendar-grid.component.html',
  styleUrl: './calendar-grid.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarGridComponent {
  private readonly calendarService = inject(CalendarService);
  private readonly dialog = inject(Dialog);
  private cdRef = inject(ChangeDetectorRef);

  cards = this.calendarService.cards;

  tryToOpenDialog(card: UiCalendarCard): void {
    if (
      this.dialog.openDialogs.length === 0 &&
      ((card.revealed && !card.canReveal) || (card.canReveal && !card.revealed))
    ) {
      const modalRef = this.dialog.open<UiCalendarCard>(CardDetailsDialogComponent, {
        data: card,
      });

      modalRef.closed.pipe(map((result) => String(result)), take(1)).subscribe(result => {
        if (result == 'not-opened') {
          this.calendarService.persistCardOpenState(card);

          card.canReveal = false;
          card.revealed = true;
          
          this.cdRef.markForCheck();
        }
      });
    }
  }
}
