import { Component } from '@angular/core';
import { ChristmasCard, ChristmasCardType } from '../christmas-card';

@Component({
  selector: 'xmas-ornaments',
  standalone: true,
  imports: [],
  templateUrl: './ornaments.component.html',
  styleUrl: './ornaments.component.css'
})
export class OrnamentsComponent implements ChristmasCard {
  readonly type = ChristmasCardType.Ornaments;
}
