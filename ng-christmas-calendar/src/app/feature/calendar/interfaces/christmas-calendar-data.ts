import { ChristmasCardType } from "../enums/christmas-card-type";

export interface CalendarCard {
  day: ChristmasCardType,
  content?: {
    author: {
      name: string,
      twitterUrl?: string;
    };
    videoSrc?: string;
    description?: string;
  }
}

export interface UiCalendarCard extends CalendarCard {
  revealed: boolean;
  canReveal: boolean;
}