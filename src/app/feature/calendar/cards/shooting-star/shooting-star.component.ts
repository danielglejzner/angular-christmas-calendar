import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xmas-shooting-star',
  templateUrl: './shooting-star.component.html',
  styleUrl: './shooting-star.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShootingStarComponent {}
