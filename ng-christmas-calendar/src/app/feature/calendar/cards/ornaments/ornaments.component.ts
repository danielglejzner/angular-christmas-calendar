import { Component } from '@angular/core';
import { ChristmasCard } from '../../interfaces/christmas-card';
import { ChristmasCardType } from '../../enums/christmas-card-type';

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
