import {Directive, Input, inject} from '@angular/core';
import {UiCalendarCard} from '../interfaces/christmas-calendar-data';
import {Dialog} from '@angular/cdk/dialog';
import {CardDetailsDialogComponent} from '../dialogs/card-details-dialog/card-details-dialog.component';

@Directive({
  selector: '[openDetailsDialog]',
  standalone: true,
  host: {
    '(click)': 'cardClicked()',
  },
})
export class OpenDetailsDialogDirective {
  private readonly dialog = inject(Dialog);

  @Input({required: true}) card!: UiCalendarCard;

  protected cardClicked() {
    if (this.dialog.openDialogs.length !== 0) {
      return;
    }

    if (this.card.revealed && !this.card.canReveal) {
      this.openDialog();
    } else if (this.card.canReveal) {
      // Note: we used set timeout because we would like to display 'open cards door' animation, otherwise it'll be overlapped by dialog.
      // eslint-disable-next-line angular/timeout-service
      setTimeout(() => {
        if (this.dialog.openDialogs.length === 0 && this.card.revealed) {
          this.openDialog();
        }
      }, 300);
    }
  }

  private openDialog(): void {
    this.dialog.open<UiCalendarCard>(CardDetailsDialogComponent, {
      data: this.card,
    });
  }
}
