import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xmas-jingle-bells',
  templateUrl: './jingle-bells.component.html',
  styleUrl: './jingle-bells.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JingleBellsComponent {}
