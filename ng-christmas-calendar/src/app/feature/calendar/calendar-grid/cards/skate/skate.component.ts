import { Component } from '@angular/core';
import { ChristmasCard, ChristmasCardType } from '../christmas-card';

@Component({
  selector: 'app-skate',
  standalone: true,
  imports: [],
  templateUrl: './skate.component.html',
  styleUrl: './skate.component.css'
})
export class SkateComponent implements ChristmasCard {
  readonly type = ChristmasCardType.Skate;
}
