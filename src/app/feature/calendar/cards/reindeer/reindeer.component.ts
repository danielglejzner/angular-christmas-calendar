import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xmas-reindeer',
  templateUrl: './reindeer.component.html',
  styleUrl: './reindeer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReindeerComponent {}
