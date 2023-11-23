import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChristmasCard, ChristmasCardType } from '../christmas-card';

@Component({
  selector: 'app-gingerbread-man-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gingerbread-man-card.component.html',
  styleUrl: './gingerbread-man-card.component.css'
})
export class GingerbreadManCardComponent implements ChristmasCard {
  readonly type = ChristmasCardType.GingerbreadMan;
}
