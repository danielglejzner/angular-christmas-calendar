import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChristmasCardType } from '../../enums/christmas-card-type';
import type { ChristmasCard } from '../../interfaces/christmas-card';

@Component({
  selector: 'xmas-stocking',
  templateUrl: './stocking.component.html',
  styleUrl: './stocking.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockingComponent implements ChristmasCard {
  readonly type = ChristmasCardType.Stocking;
}
