import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChristmasCardType } from '../../enums/christmas-card-type';
import type { ChristmasCard } from '../../interfaces/christmas-card';

@Component({
  selector: 'xmas-candle',
  templateUrl: './candle.component.html',
  styleUrl: './candle.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CandleComponent implements ChristmasCard {
  readonly type = ChristmasCardType.Candle;
}
