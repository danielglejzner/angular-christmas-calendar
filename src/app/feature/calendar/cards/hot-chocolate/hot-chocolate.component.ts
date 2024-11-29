import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ChristmasCard} from '../../interfaces/christmas-card';
import {ChristmasCardType} from '../../enums/christmas-card-type';

@Component({
  selector: 'xmas-hot-chocolate',
  imports: [],
  templateUrl: './hot-chocolate.component.html',
  styleUrl: './hot-chocolate.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotChocolateComponent implements ChristmasCard {
  readonly type = ChristmasCardType.HotChocolate;
}
