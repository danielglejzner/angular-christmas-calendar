import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChristmasCardType } from '../../enums/christmas-card-type';
import type { ChristmasCard } from '../../interfaces/christmas-card';

@Component({
  selector: 'xmas-santa',
  templateUrl: './santa.component.html',
  styleUrl: './santa.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SantaComponent implements ChristmasCard {
  readonly type = ChristmasCardType.Santa;
}
