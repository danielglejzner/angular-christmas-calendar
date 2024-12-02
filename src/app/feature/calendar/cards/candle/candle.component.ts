import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xmas-candle',
  templateUrl: './candle.component.html',
  styleUrl: './candle.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CandleComponent {}
