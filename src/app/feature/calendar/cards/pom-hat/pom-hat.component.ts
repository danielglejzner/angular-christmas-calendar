import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChristmasCardType } from '../../enums/christmas-card-type';
import type { ChristmasCard } from '../../interfaces/christmas-card';

@Component({
  selector: 'xmas-pom-hat',
  templateUrl: './pom-hat.component.html',
  styleUrl: './pom-hat.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PomHatComponent implements ChristmasCard {
  readonly type = ChristmasCardType.PomHat;
}
