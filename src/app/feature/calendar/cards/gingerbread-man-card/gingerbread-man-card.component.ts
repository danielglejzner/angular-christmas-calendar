import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xmas-gingerbread-man-card',
  templateUrl: './gingerbread-man-card.component.html',
  styleUrl: './gingerbread-man-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GingerbreadManCardComponent {}
