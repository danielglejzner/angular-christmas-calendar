import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChristmasCardType } from '../../enums/christmas-card-type';
import type { ChristmasCard } from '../../interfaces/christmas-card';

@Component({
  selector: 'xmas-gingerbread-man-card',
  templateUrl: './gingerbread-man-card.component.html',
  styleUrl: './gingerbread-man-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GingerbreadManCardComponent implements ChristmasCard {
  readonly type = ChristmasCardType.GingerbreadMan;
}
