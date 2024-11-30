import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChristmasCardType } from '../../enums/christmas-card-type';
import type { ChristmasCard } from '../../interfaces/christmas-card';

@Component({
  selector: 'xmas-christmas-lights',
  templateUrl: './christmas-lights.component.html',
  styleUrl: './christmas-lights.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChristmasLightsComponent implements ChristmasCard {
  readonly type = ChristmasCardType.ChristmasLights;
}
