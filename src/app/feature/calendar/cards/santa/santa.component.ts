import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ChristmasCard} from '../../interfaces/christmas-card';
import {ChristmasCardType} from '../../enums/christmas-card-type';

@Component({
  selector: 'xmas-santa',
  standalone: true,
  imports: [],
  templateUrl: './santa.component.html',
  styleUrl: './santa.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SantaComponent implements ChristmasCard {
  readonly type = ChristmasCardType.Santa;
}
