import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xmas-candycane',
  templateUrl: './candycane.component.html',
  styleUrl: './candycane.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CandycaneComponent {}
