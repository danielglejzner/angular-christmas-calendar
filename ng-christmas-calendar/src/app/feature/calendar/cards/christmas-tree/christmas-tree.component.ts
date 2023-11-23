import { Component } from '@angular/core';
import { ChristmasCard } from '../../interfaces/christmas-card';
import { ChristmasCardType } from '../../enums/christmas-card-type';

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
