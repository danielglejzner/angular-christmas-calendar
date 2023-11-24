import { Component } from '@angular/core';
import { ChristmasCard } from '../../interfaces/christmas-card';
import { ChristmasCardType } from '../../enums/christmas-card-type';

@Component({
  selector: 'xmas-candle',
  standalone: true,
  imports: [],
  templateUrl: './candle.component.html',
  styleUrl: './candle.component.css'
})
export class CandleComponent implements ChristmasCard {
  readonly type = ChristmasCardType.Candle;
}
