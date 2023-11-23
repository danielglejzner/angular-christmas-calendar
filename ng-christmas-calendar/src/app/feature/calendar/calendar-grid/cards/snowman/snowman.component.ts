import { Component } from '@angular/core';
import { ChristmasCard, ChristmasCardType } from '../christmas-card';

@Component({
  selector: 'xmas-snowman',
  standalone: true,
  imports: [],
  templateUrl: './snowman.component.html',
  styleUrl: './snowman.component.css'
})
export class SnowmanComponent implements ChristmasCard {
  readonly type = ChristmasCardType.Snowman;
}
