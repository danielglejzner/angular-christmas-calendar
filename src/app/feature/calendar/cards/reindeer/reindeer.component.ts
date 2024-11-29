import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { ChristmasCard } from '../../interfaces/christmas-card';
import { ChristmasCardType } from '../../enums/christmas-card-type';

@Component({
  selector: 'xmas-reindeer',
  imports: [],
  templateUrl: './reindeer.component.html',
  styleUrl: './reindeer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReindeerComponent implements ChristmasCard {
  readonly type = ChristmasCardType.Reindeer;
}
