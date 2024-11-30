import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChristmasCardType } from '../../enums/christmas-card-type';
import type { ChristmasCard } from '../../interfaces/christmas-card';

@Component({
  selector: 'xmas-snowman',
  templateUrl: './snowman.component.html',
  styleUrl: './snowman.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnowmanComponent implements ChristmasCard {
  readonly type = ChristmasCardType.Snowman;
}
