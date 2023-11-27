import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChristmasCard } from '../../interfaces/christmas-card';
import { ChristmasCardType } from '../../enums/christmas-card-type';

@Component({
  selector: 'xmas-gingerbread-man-card',
  standalone: true,
  imports: [],
  templateUrl: './gingerbread-man-card.component.html',
  styleUrl: './gingerbread-man-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GingerbreadManCardComponent implements ChristmasCard {
  readonly type = ChristmasCardType.GingerbreadMan;
}
