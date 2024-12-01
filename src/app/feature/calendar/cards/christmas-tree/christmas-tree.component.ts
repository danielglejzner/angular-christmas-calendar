import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xmas-christmas-tree',
  templateUrl: './christmas-tree.component.html',
  styleUrl: './christmas-tree.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChristmasTreeComponent {}
