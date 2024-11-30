import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChristmasCardType } from '../../enums/christmas-card-type';
import type { ChristmasCard } from '../../interfaces/christmas-card';

@Component({
  selector: 'xmas-reindeer',
  templateUrl: './reindeer.component.html',
  styleUrl: './reindeer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReindeerComponent implements ChristmasCard {
  readonly type = ChristmasCardType.Reindeer;
}
