import { Component } from '@angular/core';
import { ChristmasCard } from '../../interfaces/christmas-card';
import { ChristmasCardType } from '../../enums/christmas-card-type';

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
