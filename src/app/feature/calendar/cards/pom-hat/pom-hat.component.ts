import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xmas-pom-hat',
  templateUrl: './pom-hat.component.html',
  styleUrl: './pom-hat.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PomHatComponent {}
