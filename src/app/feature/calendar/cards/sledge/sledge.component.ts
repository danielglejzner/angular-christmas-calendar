import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xmas-sledge',
  templateUrl: './sledge.component.html',
  styleUrl: './sledge.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SledgeComponent {}
