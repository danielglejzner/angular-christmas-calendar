import type { InputSignal, OnInit, Type } from '@angular/core';
import { Directive, ViewContainerRef, inject, input } from '@angular/core';
import { ChristmasCardType } from '../enums/christmas-card-type';
import type { ChristmasCard } from '../interfaces/christmas-card';
import { CandleComponent } from './candle/candle.component';
import { CandycaneComponent } from './candycane/candycane.component';
import { ChristmasLightsComponent } from './christmas-lights/christmas-lights.component';
import { ChristmasTreeComponent } from './christmas-tree/christmas-tree.component';
import { DrumComponent } from './drum/drum.component';
import { ElfHatComponent } from './elf-hat/elf-hat.component';
import { GiftBoxComponent } from './gift-box/gift-box.component';
import { GingerbreadManCardComponent } from './gingerbread-man-card/gingerbread-man-card.component';
import { HotChocolateComponent } from './hot-chocolate/hot-chocolate.component';
import { NorthPoleComponent } from './north-pole/north-pole.component';
import { OrnamentsComponent } from './ornaments/ornaments.component';
import { PolarBearComponent } from './polar-bear/polar-bear.component';
import { PomHatComponent } from './pom-hat/pom-hat.component';
import { ReindeerComponent } from './reindeer/reindeer.component';
import { SantaComponent } from './santa/santa.component';
import { ShootingStarComponent } from './shooting-star/shooting-star.component';
import { SkateComponent } from './skate/skate.component';
import { SledgeComponent } from './sledge/sledge.component';
import { SnowflakeComponent } from './snowflake/snowflake.component';
import { SnowmanComponent } from './snowman/snowman.component';
import { SparklerComponent } from './sparkler/sparkler.component';
import { StockingComponent } from './stocking/stocking.component';
import { ToyTrainComponent } from './toy-train/toy-train.component';

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
  [ChristmasCardType.JingleBells]: PolarBearComponent,
  [ChristmasCardType.Reindeer]: ReindeerComponent,
  [ChristmasCardType.ChristmasTree]: ChristmasTreeComponent,
};

@Directive({
  selector: '[xmasCalendarCardFactory]',
})
export class CalendarCardFactoryDirective implements OnInit {
  readonly type: InputSignal<ChristmasCardType> = input.required<ChristmasCardType>();

  private readonly container = inject(ViewContainerRef);

  ngOnInit(): void {
    const cardType: Type<ChristmasCard> = christmasCardsFactoryMap[this.type()];

    this.container.createComponent(cardType);
  }
}
