import { Component } from '@angular/core';
import { ChristmasCard, ChristmasCardType } from '../christmas-card';
@Component({
  selector: 'xmas-christmas-tree',
  standalone: true,
  imports: [],
  templateUrl: './christmas-tree.component.html',
  styleUrl: './christmas-tree.component.css'
})
export class ChristmasTreeComponent implements ChristmasCard {
  readonly type = ChristmasCardType.ChristmasTree;
}
