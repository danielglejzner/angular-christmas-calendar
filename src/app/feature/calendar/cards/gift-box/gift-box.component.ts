import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xmas-gift-box',
  templateUrl: './gift-box.component.html',
  styleUrl: './gift-box.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GiftBoxComponent {}
