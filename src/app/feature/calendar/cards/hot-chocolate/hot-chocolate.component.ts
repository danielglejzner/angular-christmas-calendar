import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xmas-hot-chocolate',
  templateUrl: './hot-chocolate.component.html',
  styleUrl: './hot-chocolate.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotChocolateComponent {}
