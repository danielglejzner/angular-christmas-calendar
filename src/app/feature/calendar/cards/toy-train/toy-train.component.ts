import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ChristmasCard} from '../../interfaces/christmas-card';
import {ChristmasCardType} from '../../enums/christmas-card-type';

@Component({
  selector: 'xmas-toy-train',
  standalone: true,
  imports: [],
  templateUrl: './toy-train.component.html',
  styleUrl: './toy-train.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToyTrainComponent implements ChristmasCard {
  readonly type = ChristmasCardType.ToyTrain;
}
