import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChristmasCard } from '../../interfaces/christmas-card';
import { ChristmasCardType } from '../../enums/christmas-card-type';

@Component({
  selector: 'xmas-sparkler',
  standalone: true,
  imports: [],
  templateUrl: './sparkler.component.html',
  styleUrl: './sparkler.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SparklerComponent implements ChristmasCard {
  readonly type = ChristmasCardType.Sparkler;
}
