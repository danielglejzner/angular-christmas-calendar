import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ChristmasCard} from '../../interfaces/christmas-card';
import {ChristmasCardType} from '../../enums/christmas-card-type';

@Component({
  selector: 'xmas-stocking',
  standalone: true,
  imports: [],
  templateUrl: './stocking.component.html',
  styleUrl: './stocking.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockingComponent implements ChristmasCard {
  readonly type = ChristmasCardType.Stocking;
}
