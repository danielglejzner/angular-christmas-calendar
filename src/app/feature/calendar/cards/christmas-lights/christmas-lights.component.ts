import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ChristmasCard} from '../../interfaces/christmas-card';
import {ChristmasCardType} from '../../enums/christmas-card-type';

@Component({
  selector: 'xmas-christmas-lights',
  imports: [],
  templateUrl: './christmas-lights.component.html',
  styleUrl: './christmas-lights.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChristmasLightsComponent implements ChristmasCard {
  readonly type = ChristmasCardType.ChristmasLights;
}
