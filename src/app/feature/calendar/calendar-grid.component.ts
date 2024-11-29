import { DialogModule } from '@angular/cdk/dialog';
import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CalendarCardFactoryDirective } from './cards/calendar-card-factory.directive';
import { OpenDetailsDialogDirective } from './directives/open-details-dialog.directive';
import { ShakeWhenDisabledDirective } from './directives/shake-on-click.directive';
import { SocialProfileUrlPipe } from './pipes/social-profile-url.pipe';
import { CalendarService } from './services/calendar.service';
import { SoundService } from './services/sound.service';

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
  cards = this.calendarService.cards;

  constructor() {
    afterNextRender(() => {
      this.soundService.init();
      
    })
  }
}
