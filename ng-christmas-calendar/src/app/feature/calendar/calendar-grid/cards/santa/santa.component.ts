import { Component } from '@angular/core';
import { ChristmasCard, ChristmasCardType } from '../christmas-card';

@Component({
  selector: 'app-santa',
  standalone: true,
  imports: [],
  templateUrl: './santa.component.html',
  styleUrl: './santa.component.css'
})
export class SantaComponent implements ChristmasCard {
  readonly type = ChristmasCardType.Santa;
}
