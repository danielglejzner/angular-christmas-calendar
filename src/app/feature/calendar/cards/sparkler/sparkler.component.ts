import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChristmasCardType } from '../../enums/christmas-card-type';
import type { ChristmasCard } from '../../interfaces/christmas-card';

@Component({
  selector: 'xmas-sparkler',
  templateUrl: './sparkler.component.html',
  styleUrl: './sparkler.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SparklerComponent implements ChristmasCard {
  readonly type = ChristmasCardType.Sparkler;
}
