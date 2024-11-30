import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChristmasCardType } from '../../enums/christmas-card-type';
import type { ChristmasCard } from '../../interfaces/christmas-card';

@Component({
  selector: 'xmas-christmas-tree',
  templateUrl: './christmas-tree.component.html',
  styleUrl: './christmas-tree.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChristmasTreeComponent implements ChristmasCard {
  readonly type = ChristmasCardType.ChristmasTree;
}
