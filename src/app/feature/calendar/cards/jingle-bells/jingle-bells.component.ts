import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChristmasCardType } from '../../enums/christmas-card-type';
import type { ChristmasCard } from '../../interfaces/christmas-card';

@Component({
  selector: 'xmas-jingle-bells',
  templateUrl: './jingle-bells.component.html',
  styleUrl: './jingle-bells.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JingleBellsComponent implements ChristmasCard {
  readonly type = ChristmasCardType.JingleBells;
}
