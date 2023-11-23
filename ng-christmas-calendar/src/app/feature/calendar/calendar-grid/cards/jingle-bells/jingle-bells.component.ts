import { Component } from '@angular/core';
import { ChristmasCard, ChristmasCardType } from '../christmas-card';

@Component({
  selector: 'xmas-jingle-bells',
  standalone: true,
  imports: [],
  templateUrl: './jingle-bells.component.html',
  styleUrl: './jingle-bells.component.css'
})
export class JingleBellsComponent implements ChristmasCard {
  readonly type = ChristmasCardType.JingleBells;
}
