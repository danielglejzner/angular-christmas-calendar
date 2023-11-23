import { Component } from '@angular/core';
import { ChristmasCard, ChristmasCardType } from '../christmas-card';

@Component({
  selector: 'xmas-sledge',
  standalone: true,
  imports: [],
  templateUrl: './sledge.component.html',
  styleUrl: './sledge.component.css'
})
export class SledgeComponent implements ChristmasCard {
  readonly type = ChristmasCardType.Sledge;
}
