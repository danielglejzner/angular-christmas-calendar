import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChristmasCardType } from '../../enums/christmas-card-type';
import type { ChristmasCard } from '../../interfaces/christmas-card';

@Component({
  selector: 'xmas-polar-bear',
  templateUrl: './polar-bear.component.html',
  styleUrl: './polar-bear.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolarBearComponent implements ChristmasCard {
  readonly type = ChristmasCardType.PolarBear;
}
