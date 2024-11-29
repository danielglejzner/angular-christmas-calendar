import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChristmasCardType } from '../../enums/christmas-card-type';
import type { ChristmasCard } from '../../interfaces/christmas-card';

@Component({
  selector: 'xmas-candycane',
  imports: [],
  templateUrl: './candycane.component.html',
  styleUrl: './candycane.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CandycaneComponent implements ChristmasCard {
  type = ChristmasCardType.Candycane;
}
