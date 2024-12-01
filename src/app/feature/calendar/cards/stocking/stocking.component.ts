import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xmas-stocking',
  templateUrl: './stocking.component.html',
  styleUrl: './stocking.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockingComponent {}
