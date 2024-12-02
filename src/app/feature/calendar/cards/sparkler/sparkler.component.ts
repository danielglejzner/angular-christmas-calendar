import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xmas-sparkler',
  templateUrl: './sparkler.component.html',
  styleUrl: './sparkler.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SparklerComponent {}
