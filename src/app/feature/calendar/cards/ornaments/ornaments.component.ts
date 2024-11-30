import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChristmasCardType } from '../../enums/christmas-card-type';
import type { ChristmasCard } from '../../interfaces/christmas-card';

@Component({
  selector: 'xmas-ornaments',
  templateUrl: './ornaments.component.html',
  styleUrl: './ornaments.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrnamentsComponent implements ChristmasCard {
  readonly type = ChristmasCardType.Ornaments;
}
