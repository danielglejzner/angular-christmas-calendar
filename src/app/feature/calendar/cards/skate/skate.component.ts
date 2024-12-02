import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xmas-skate',
  templateUrl: './skate.component.html',
  styleUrl: './skate.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkateComponent {}
