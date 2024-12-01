import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xmas-ornaments',
  templateUrl: './ornaments.component.html',
  styleUrl: './ornaments.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrnamentsComponent {}
