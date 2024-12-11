import { DialogModule } from '@angular/cdk/dialog';
import { NgOptimizedImage } from '@angular/common';
import { afterNextRender, ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CalendarCardFactoryDirective } from './cards/calendar-card-factory.directive';
import { OpenDetailsDialogDirective } from './directives/open-details-dialog.directive';
import { ShakeWhenDisabledDirective } from './directives/shake-on-click.directive';
import { SocialProfileUrlPipe } from './pipes/social-profile-url.pipe';
import { CalendarService } from './services/calendar.service';
import { SoundService } from './services/sound.service';
import { CardStorageService } from './services/card-storage.service';

@Component({
  selector: 'xmas-calendar-grid',
  imports: [
    CalendarCardFactoryDirective,
    DialogModule,
    NgOptimizedImage,
    OpenDetailsDialogDirective,
    ShakeWhenDisabledDirective,
    SocialProfileUrlPipe,
  ],
  templateUrl: './calendar-grid.component.html',
  styleUrl: './calendar-grid.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarGridComponent {
  private readonly soundService = inject(SoundService);
  private readonly calendarService = inject(CalendarService);
  private readonly cardStorageService = inject(CardStorageService)
  protected cards = this.calendarService.cards;

  constructor() {
    afterNextRender(() => {
      this.soundService.init();
    });
  }

  onCardChange(day: number, status: "open" | "closed", revealed: boolean): void {
    if (revealed) {
      this.cardStorageService.storeAsVisited(day, status == "closed" ? "open" : "closed");
    }
  }
}
