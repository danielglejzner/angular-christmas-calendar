import { Component } from '@angular/core';
import { ChristmasCard, ChristmasCardType } from '../christmas-card';

@Component({
  selector: 'xmas-drum',
  standalone: true,
  imports: [],
  templateUrl: './drum.component.html',
  styleUrl: './drum.component.css'
})
export class DrumComponent implements ChristmasCard {
  readonly type = ChristmasCardType.Drum;
}
