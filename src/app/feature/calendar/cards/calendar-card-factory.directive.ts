import {Directive, Input, OnInit, Type, ViewContainerRef, inject} from '@angular/core';
import {ChristmasCard} from '../interfaces/christmas-card';
import {GingerbreadManCardComponent} from './gingerbread-man-card/gingerbread-man-card.component';
import {SnowflakeComponent} from './snowflake/snowflake.component';
import {StockingComponent} from './stocking/stocking.component';
import {GiftBoxComponent} from './gift-box/gift-box.component';
import {SledgeComponent} from './sledge/sledge.component';
import {SantaComponent} from './santa/santa.component';
import {CandleComponent} from './candle/candle.component';
import {CandycaneComponent} from './candycane/candycane.component';
import {HotChocolateComponent} from './hot-chocolate/hot-chocolate.component';
import {SnowmanComponent} from './snowman/snowman.component';
import {ChristmasLightsComponent} from './christmas-lights/christmas-lights.component';
import {PolarBearComponent} from './polar-bear/polar-bear.component';
import {ElfHatComponent} from './elf-hat/elf-hat.component';
import {OrnamentsComponent} from './ornaments/ornaments.component';
import {NorthPoleComponent} from './north-pole/north-pole.component';
import {SkateComponent} from './skate/skate.component';
import {ShootingStarComponent} from './shooting-star/shooting-star.component';
import {DrumComponent} from './drum/drum.component';
import {SparklerComponent} from './sparkler/sparkler.component';
import {PomHatComponent} from './pom-hat/pom-hat.component';
import {ToyTrainComponent} from './toy-train/toy-train.component';
import {ReindeerComponent} from './reindeer/reindeer.component';
import {ChristmasTreeComponent} from './christmas-tree/christmas-tree.component';
import {ChristmasCardType} from '../enums/christmas-card-type';

export const christmasCardsFactoryMap: Record<ChristmasCardType, Type<ChristmasCard>> = {
  [ChristmasCardType.GingerbreadMan]: GingerbreadManCardComponent,
  [ChristmasCardType.Snowflake]: SnowflakeComponent,
  [ChristmasCardType.Stocking]: StockingComponent,
  [ChristmasCardType.GiftBox]: GiftBoxComponent,
  [ChristmasCardType.Sledge]: SledgeComponent,
  [ChristmasCardType.Santa]: SantaComponent,
  [ChristmasCardType.Candle]: CandleComponent,
  [ChristmasCardType.Candycane]: CandycaneComponent,
  [ChristmasCardType.HotChocolate]: HotChocolateComponent,
  [ChristmasCardType.Snowman]: SnowmanComponent,
  [ChristmasCardType.ChristmasLights]: ChristmasLightsComponent,
  [ChristmasCardType.PolarBear]: PolarBearComponent,
  [ChristmasCardType.ElfHat]: ElfHatComponent,
  [ChristmasCardType.Ornaments]: OrnamentsComponent,
  [ChristmasCardType.NorthPole]: NorthPoleComponent,
  [ChristmasCardType.Skate]: SkateComponent,
  [ChristmasCardType.ShootingStar]: ShootingStarComponent,
  [ChristmasCardType.Drum]: DrumComponent,
  [ChristmasCardType.Sparkler]: SparklerComponent,
  [ChristmasCardType.PomHat]: PomHatComponent,
  [ChristmasCardType.ToyTrain]: ToyTrainComponent,
  [ChristmasCardType.JingleBells]: SantaComponent,
  [ChristmasCardType.Reindeer]: ReindeerComponent,
  [ChristmasCardType.ChristmasTree]: ChristmasTreeComponent,
};

@Directive({
  selector: '[xmasCalendarCardFactory]',
  standalone: true,
})
export class CalendarCardFactoryDirective implements OnInit {
  @Input({required: true}) type!: ChristmasCardType;

  private readonly container = inject(ViewContainerRef);

  ngOnInit(): void {
    const cardType: Type<ChristmasCard> = christmasCardsFactoryMap[this.type];

    this.container.createComponent(cardType);
  }
}
