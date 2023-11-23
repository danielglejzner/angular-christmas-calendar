import { Component } from '@angular/core';
import { ChristmasCard, ChristmasCardType } from '../christmas-card';

@Component({
  selector: 'app-candycane',
  standalone: true,
  imports: [],
  templateUrl: './candycane.component.html',
  styleUrl: './candycane.component.css'
})
export class CandycaneComponent implements ChristmasCard {
  type = ChristmasCardType.Candycane;
}
