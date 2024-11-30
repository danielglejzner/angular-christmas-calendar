import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChristmasCardType } from '../../enums/christmas-card-type';
import type { ChristmasCard } from '../../interfaces/christmas-card';

@Component({
  selector: 'xmas-toy-train',
  templateUrl: './toy-train.component.html',
  styleUrl: './toy-train.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToyTrainComponent implements ChristmasCard {
  readonly type = ChristmasCardType.ToyTrain;
}
