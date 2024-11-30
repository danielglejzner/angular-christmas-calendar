import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChristmasCardType } from '../../enums/christmas-card-type';
import type { ChristmasCard } from '../../interfaces/christmas-card';

@Component({
  selector: 'xmas-drum',
  templateUrl: './drum.component.html',
  styleUrl: './drum.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrumComponent implements ChristmasCard {
  readonly type = ChristmasCardType.Drum;
}
