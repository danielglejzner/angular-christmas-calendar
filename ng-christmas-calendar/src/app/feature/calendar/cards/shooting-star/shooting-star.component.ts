import { Component } from '@angular/core';
import { ChristmasCard } from '../../interfaces/christmas-card';
import { ChristmasCardType } from '../../enums/christmas-card-type';

@Component({
  selector: 'xmas-shooting-star',
  standalone: true,
  imports: [],
  templateUrl: './shooting-star.component.html',
  styleUrl: './shooting-star.component.css'
})
export class ShootingStarComponent implements ChristmasCard {
  readonly type = ChristmasCardType.ShootingStar;
}
