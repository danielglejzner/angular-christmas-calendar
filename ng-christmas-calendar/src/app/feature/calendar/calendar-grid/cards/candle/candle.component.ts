import { Component } from '@angular/core';
import { ChristmasCard, ChristmasCardType } from '../christmas-card';

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
