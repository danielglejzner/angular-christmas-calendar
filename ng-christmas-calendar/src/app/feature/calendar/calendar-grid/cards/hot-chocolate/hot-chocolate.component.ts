import { Component } from '@angular/core';
import { ChristmasCard, ChristmasCardType } from '../christmas-card';

@Component({
  selector: 'xmas-hot-chocolate',
  standalone: true,
  imports: [],
  templateUrl: './hot-chocolate.component.html',
  styleUrl: './hot-chocolate.component.css'
})
export class HotChocolateComponent implements ChristmasCard {
  readonly type = ChristmasCardType.HotChocolate;
}
