import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChristmasCard, ChristmasCardType } from '../christmas-card';

@Component({
  selector: 'app-gift-box',
  standalone: true,
  imports: [],
  templateUrl: './gift-box.component.html',
  styleUrl: './gift-box.component.css'
})
export class GiftBoxComponent implements ChristmasCard {
  readonly type = ChristmasCardType.GiftBox;
}
