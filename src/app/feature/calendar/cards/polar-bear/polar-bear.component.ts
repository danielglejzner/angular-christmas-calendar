import { Component } from '@angular/core';
import { ChristmasCard } from '../../interfaces/christmas-card';
import { ChristmasCardType } from '../../enums/christmas-card-type';

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
