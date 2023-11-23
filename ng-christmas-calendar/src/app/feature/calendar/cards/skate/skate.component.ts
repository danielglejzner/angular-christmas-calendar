import { Component } from '@angular/core';
import { ChristmasCard } from '../../interfaces/christmas-card';
import { ChristmasCardType } from '../../enums/christmas-card-type';

@Component({
  selector: 'xmas-skate',
  standalone: true,
  imports: [],
  templateUrl: './skate.component.html',
  styleUrl: './skate.component.css'
})
export class SkateComponent implements ChristmasCard {
  readonly type = ChristmasCardType.Skate;
}
