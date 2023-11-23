import { Component } from '@angular/core';
import { ChristmasCard, ChristmasCardType } from '../christmas-card';

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
