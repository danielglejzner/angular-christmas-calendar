import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ChristmasCard} from '../../interfaces/christmas-card';
import {ChristmasCardType} from '../../enums/christmas-card-type';

@Component({
    selector: 'xmas-skate',
    imports: [],
    templateUrl: './skate.component.html',
    styleUrl: './skate.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkateComponent implements ChristmasCard {
  readonly type = ChristmasCardType.Skate;
}
