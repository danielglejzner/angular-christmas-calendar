import { Component } from '@angular/core';
import { ChristmasCard, ChristmasCardType } from '../christmas-card';

@Component({
  selector: 'xmas-reindeer',
  standalone: true,
  imports: [],
  templateUrl: './reindeer.component.html',
  styleUrl: './reindeer.component.css'
})
export class ReindeerComponent implements ChristmasCard {
  readonly type = ChristmasCardType.Reindeer;
}
