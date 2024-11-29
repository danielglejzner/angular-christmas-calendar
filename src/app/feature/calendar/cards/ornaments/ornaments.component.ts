import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChristmasCard } from '../../interfaces/christmas-card';
import { ChristmasCardType } from '../../enums/christmas-card-type';

@Component({
  selector: 'xmas-ornaments',
  imports: [],
  templateUrl: './ornaments.component.html',
  styleUrl: './ornaments.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrnamentsComponent implements ChristmasCard {
  readonly type = ChristmasCardType.Ornaments;
}
