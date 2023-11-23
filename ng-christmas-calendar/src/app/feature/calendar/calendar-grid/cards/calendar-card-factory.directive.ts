import { ComponentRef, Directive, Input, OnInit, Type, ViewContainerRef, inject } from '@angular/core';
import { ChristmasCard, ChristmasCardType } from './christmas-card';
import { GingerbreadManCardComponent } from './gingerbread-man-card/gingerbread-man-card.component';
import { NotImplementedComponent } from './not-implemented/not-implemented.component';
import { SnowflakeComponent } from './snowflake/snowflake.component';
import { StockingComponent } from './stocking/stocking.component';
import { GiftBoxComponent } from './gift-box/gift-box.component';
import { SledgeComponent } from './sledge/sledge.component';
import { SantaComponent } from './santa/santa.component';
import { CandleComponent } from './candle/candle.component';
import { CandycaneComponent } from './candycane/candycane.component';
import { HotChocolateComponent } from './hot-chocolate/hot-chocolate.component';
import { SnowmanComponent } from './snowman/snowman.component';

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
  [ChristmasCardType.ChristmasLights]: NotImplementedComponent,
  [ChristmasCardType.PolarBear]: NotImplementedComponent,
  [ChristmasCardType.ElfHat]: NotImplementedComponent,
  [ChristmasCardType.Ornaments]: NotImplementedComponent,
  [ChristmasCardType.NorthPole]: NotImplementedComponent,
  [ChristmasCardType.Skate]: NotImplementedComponent,
  [ChristmasCardType.ShootingStar]: NotImplementedComponent,
  [ChristmasCardType.Drum]: NotImplementedComponent,
  [ChristmasCardType.Sparkler]: NotImplementedComponent,
  [ChristmasCardType.PomHat]: NotImplementedComponent,
  [ChristmasCardType.ToyTrain]: NotImplementedComponent,
  [ChristmasCardType.JingleBells]: NotImplementedComponent,
  [ChristmasCardType.Reindeer]: NotImplementedComponent,
  [ChristmasCardType.ChristmasTree]: NotImplementedComponent,
};

@Directive({
  selector: '[appCalendarCardFactory]',
  standalone: true
})
export class CalendarCardFactoryDirective implements OnInit {
  @Input({required: true}) type!: ChristmasCardType;

  private readonly container = inject(ViewContainerRef);

  private cardComponent?: ComponentRef<ChristmasCard>;

  ngOnInit(): void {
    const cardType: Type<ChristmasCard> = christmasCardsFactoryMap[this.type];

    if (this.cardComponent) {
      this.container.clear();
      this.cardComponent = undefined;
    }

    this.cardComponent = this.container.createComponent(cardType);
  }
}
