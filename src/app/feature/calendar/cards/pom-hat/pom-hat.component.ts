import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ChristmasCard} from '../../interfaces/christmas-card';
import {ChristmasCardType} from '../../enums/christmas-card-type';

@Component({
    selector: 'xmas-pom-hat',
    imports: [],
    templateUrl: './pom-hat.component.html',
    styleUrl: './pom-hat.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PomHatComponent implements ChristmasCard {
  readonly type = ChristmasCardType.PomHat;
}
