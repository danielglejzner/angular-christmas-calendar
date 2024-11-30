import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChristmasCardType } from '../../enums/christmas-card-type';
import type { ChristmasCard } from '../../interfaces/christmas-card';

@Component({
  selector: 'xmas-skate',
  templateUrl: './skate.component.html',
  styleUrl: './skate.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkateComponent implements ChristmasCard {
  readonly type = ChristmasCardType.Skate;
}
