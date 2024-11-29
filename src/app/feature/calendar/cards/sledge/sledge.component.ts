import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChristmasCard } from '../../interfaces/christmas-card';
import { ChristmasCardType } from '../../enums/christmas-card-type';

@Component({
  selector: 'xmas-sledge',
  imports: [],
  templateUrl: './sledge.component.html',
  styleUrl: './sledge.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SledgeComponent implements ChristmasCard {
  readonly type = ChristmasCardType.Sledge;
}
