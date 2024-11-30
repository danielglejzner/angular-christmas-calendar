import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChristmasCardType } from '../../enums/christmas-card-type';
import type { ChristmasCard } from '../../interfaces/christmas-card';

@Component({
  selector: 'xmas-shooting-star',
  templateUrl: './shooting-star.component.html',
  styleUrl: './shooting-star.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShootingStarComponent implements ChristmasCard {
  readonly type = ChristmasCardType.ShootingStar;
}
