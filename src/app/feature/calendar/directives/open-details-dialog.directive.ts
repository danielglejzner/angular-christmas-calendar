import { Dialog } from '@angular/cdk/dialog';
import { Directive, inject, input } from '@angular/core';
import { CardDetailsDialogComponent } from '../dialogs/card-details-dialog/card-details-dialog.component';
import type { UiCalendarCard } from '../interfaces/christmas-calendar-data';
import { CardStorageService } from '../services/card-storage.service';

@Directive({
  selector: '[xmasOpenDetailsDialog]',
  host: {
    '(click)': 'cardClicked()',
  },
})
export class OpenDetailsDialogDirective {
  private readonly dialog = inject(Dialog);
  private readonly cardStorageService = inject(CardStorageService);

  readonly card = input.required<UiCalendarCard>();

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
    this.storeAsVisited(this.card().day);

    this.dialog.open<UiCalendarCard>(CardDetailsDialogComponent, {
      data: this.card(),
    });
  }

  private storeAsVisited(day: number): void {
    this.cardStorageService.storeAsVisited(day);
  }
}
