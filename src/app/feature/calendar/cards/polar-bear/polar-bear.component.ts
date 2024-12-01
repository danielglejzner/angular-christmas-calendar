import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xmas-polar-bear',
  templateUrl: './polar-bear.component.html',
  styleUrl: './polar-bear.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolarBearComponent {}
