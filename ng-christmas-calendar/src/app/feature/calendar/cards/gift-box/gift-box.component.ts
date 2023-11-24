import { Component } from '@angular/core';
import { ChristmasCard } from '../../interfaces/christmas-card';
import { ChristmasCardType } from '../../enums/christmas-card-type';

@Component({
  selector: 'xmas-gift-box',
  standalone: true,
  imports: [],
  templateUrl: './gift-box.component.html',
  styleUrl: './gift-box.component.css'
})
export class GiftBoxComponent implements ChristmasCard {
  readonly type = ChristmasCardType.GiftBox;
}
