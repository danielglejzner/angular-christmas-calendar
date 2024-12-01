import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xmas-santa',
  templateUrl: './santa.component.html',
  styleUrl: './santa.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SantaComponent {}
