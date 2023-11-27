import { Component } from '@angular/core';
import { ChristmasCard } from '../../interfaces/christmas-card';
import { ChristmasCardType } from '../../enums/christmas-card-type';

@Component({
  selector: 'xmas-candycane',
  standalone: true,
  imports: [],
  templateUrl: './candycane.component.html',
  styleUrl: './candycane.component.css'
})
export class CandycaneComponent implements ChristmasCard {
  type = ChristmasCardType.Candycane;
}
