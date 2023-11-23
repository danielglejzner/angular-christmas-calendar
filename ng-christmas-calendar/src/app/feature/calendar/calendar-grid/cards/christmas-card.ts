export enum ChristmasCardType {
  GingerbreadMan = 1,
  Snowflake,
  Stocking,
  GiftBox,
  Sledge,
  Santa,
  Candle,
  Candycane,
  HotChocolate,
  Snowman,
  ChristmasLights,
  PolarBear,
  ElfHat,
  Ornaments,
  NorthPole,
  Skate,
  ShootingStar,
  Drum,
  Sparkler,
  PomHat,
  ToyTrain,
  JingleBells,
  Reindeer,
  ChristmasTree,
}

export interface ChristmasCard {
  type: ChristmasCardType;
}