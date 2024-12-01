import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xmas-christmas-lights',
  templateUrl: './christmas-lights.component.html',
  styleUrl: './christmas-lights.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChristmasLightsComponent {}
