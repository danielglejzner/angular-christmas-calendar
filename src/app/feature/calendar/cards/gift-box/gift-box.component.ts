import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChristmasCardType } from '../../enums/christmas-card-type';
import type { ChristmasCard } from '../../interfaces/christmas-card';

@Component({
  selector: 'xmas-gift-box',
  templateUrl: './gift-box.component.html',
  styleUrl: './gift-box.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GiftBoxComponent implements ChristmasCard {
  readonly type = ChristmasCardType.GiftBox;
}
