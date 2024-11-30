import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChristmasCardType } from '../../enums/christmas-card-type';
import type { ChristmasCard } from '../../interfaces/christmas-card';

@Component({
  selector: 'xmas-hot-chocolate',
  templateUrl: './hot-chocolate.component.html',
  styleUrl: './hot-chocolate.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotChocolateComponent implements ChristmasCard {
  readonly type = ChristmasCardType.HotChocolate;
}
