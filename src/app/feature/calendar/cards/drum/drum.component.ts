import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChristmasCard } from '../../interfaces/christmas-card';
import { ChristmasCardType } from '../../enums/christmas-card-type';

@Component({
  selector: 'xmas-drum',
  standalone: true,
  imports: [],
  templateUrl: './drum.component.html',
  styleUrl: './drum.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrumComponent implements ChristmasCard {
  readonly type = ChristmasCardType.Drum;
}
