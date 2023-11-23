import { Component } from '@angular/core';
import { ChristmasCard, ChristmasCardType } from '../christmas-card';

@Component({
  selector: 'xmas-north-pole',
  standalone: true,
  imports: [],
  templateUrl: './north-pole.component.html',
  styleUrl: './north-pole.component.css'
})
export class NorthPoleComponent implements ChristmasCard {
  readonly type = ChristmasCardType.NorthPole;
}
