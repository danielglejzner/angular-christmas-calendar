import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xmas-snowman',
  templateUrl: './snowman.component.html',
  styleUrl: './snowman.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnowmanComponent {}
