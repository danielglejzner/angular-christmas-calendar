import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ChristmasCard} from '../../interfaces/christmas-card';
import {ChristmasCardType} from '../../enums/christmas-card-type';

@Component({
    selector: 'xmas-gift-box',
    imports: [],
    templateUrl: './gift-box.component.html',
    styleUrl: './gift-box.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GiftBoxComponent implements ChristmasCard {
  readonly type = ChristmasCardType.GiftBox;
}
