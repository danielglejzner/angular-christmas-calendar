import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChristmasCard } from '../../interfaces/christmas-card';
import { ChristmasCardType } from '../../enums/christmas-card-type';

@Component({
  selector: 'xmas-shooting-star',
  standalone: true,
  imports: [],
  templateUrl: './shooting-star.component.html',
  styleUrl: './shooting-star.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShootingStarComponent implements ChristmasCard {
  readonly type = ChristmasCardType.ShootingStar;
}
