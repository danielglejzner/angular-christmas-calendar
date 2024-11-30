import { Dialog } from '@angular/cdk/dialog';
import type { InputSignal } from '@angular/core';
import { Directive, inject, input } from '@angular/core';
import { CardDetailsDialogComponent } from '../dialogs/card-details-dialog/card-details-dialog.component';
import type { UiCalendarCard } from '../interfaces/christmas-calendar-data';

@Directive({
  selector: '[xmasOpenDetailsDialog]',
  host: {
    '(click)': 'cardClicked()',
  },
})
export class OpenDetailsDialogDirective {
  private readonly dialog = inject(Dialog);

  readonly card: InputSignal<UiCalendarCard> = input.required<UiCalendarCard>();

  protected cardClicked(): void {
    if (this.dialog.openDialogs.length !== 0) {
      return;
    }

    if (this.card().revealed && !this.card().canReveal) {
      this.openDialog();
    } else if (this.card().canReveal) {
      // Note: we used set timeout because we would like to display 'open cards door' animation, otherwise it'll be overlapped by dialog.
      setTimeout(() => {
        if (this.dialog.openDialogs.length === 0 && this.card().revealed) {
          this.openDialog();
        }
      }, 500);
    }
  }

  private openDialog(): void {
    this.dialog.open<UiCalendarCard>(CardDetailsDialogComponent, {
      data: this.card(),
    });
  }
}
