import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChristmasCardType } from '../../enums/christmas-card-type';
import type { ChristmasCard } from '../../interfaces/christmas-card';

@Component({
  selector: 'xmas-sledge',
  templateUrl: './sledge.component.html',
  styleUrl: './sledge.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SledgeComponent implements ChristmasCard {
  readonly type = ChristmasCardType.Sledge;
}
