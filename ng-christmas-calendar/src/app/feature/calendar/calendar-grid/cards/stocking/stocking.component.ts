import { Component } from '@angular/core';
import { ChristmasCard, ChristmasCardType } from '../christmas-card';

@Component({
  selector: 'app-stocking',
  standalone: true,
  imports: [],
  templateUrl: './stocking.component.html',
  styleUrl: './stocking.component.css'
})
export class StockingComponent implements ChristmasCard {
  readonly type = ChristmasCardType.Stocking;
}
