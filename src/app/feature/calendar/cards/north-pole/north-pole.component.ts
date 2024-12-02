import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xmas-north-pole',
  templateUrl: './north-pole.component.html',
  styleUrl: './north-pole.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NorthPoleComponent {}
