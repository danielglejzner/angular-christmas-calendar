import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChristmasCardType } from '../../enums/christmas-card-type';
import type { ChristmasCard } from '../../interfaces/christmas-card';

@Component({
  selector: 'xmas-north-pole',
  templateUrl: './north-pole.component.html',
  styleUrl: './north-pole.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NorthPoleComponent implements ChristmasCard {
  readonly type = ChristmasCardType.NorthPole;
}
