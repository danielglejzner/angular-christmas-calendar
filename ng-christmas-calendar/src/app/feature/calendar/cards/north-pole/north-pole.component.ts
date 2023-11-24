import { Component } from '@angular/core';
import { ChristmasCard } from '../../interfaces/christmas-card';
import { ChristmasCardType } from '../../enums/christmas-card-type';

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
