import { Component } from '@angular/core';
import { ChristmasCard, ChristmasCardType } from '../christmas-card';

@Component({
  selector: 'app-sparkler',
  standalone: true,
  imports: [],
  templateUrl: './sparkler.component.html',
  styleUrl: './sparkler.component.css'
})
export class SparklerComponent implements ChristmasCard {
  readonly type = ChristmasCardType.Sparkler;
}
