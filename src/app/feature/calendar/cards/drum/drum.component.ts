import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xmas-drum',
  templateUrl: './drum.component.html',
  styleUrl: './drum.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrumComponent {}
