import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ChristmasCard} from '../../interfaces/christmas-card';
import {ChristmasCardType} from '../../enums/christmas-card-type';

@Component({
  selector: 'xmas-jingle-bells',
  standalone: true,
  imports: [],
  templateUrl: './jingle-bells.component.html',
  styleUrl: './jingle-bells.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JingleBellsComponent implements ChristmasCard {
  readonly type = ChristmasCardType.JingleBells;
}
