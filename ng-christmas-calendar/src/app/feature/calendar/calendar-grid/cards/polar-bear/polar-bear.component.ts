import { Component } from '@angular/core';
import { ChristmasCard, ChristmasCardType } from '../christmas-card';

@Component({
  selector: 'xmas-polar-bear',
  standalone: true,
  imports: [],
  templateUrl: './polar-bear.component.html',
  styleUrl: './polar-bear.component.css'
})
export class PolarBearComponent implements ChristmasCard {
  readonly type = ChristmasCardType.PolarBear;
}
