import {ChristmasCardType} from '../enums/christmas-card-type';

export interface CalendarCard {
  day: ChristmasCardType;
  content?: {
    author: {
      name: string;
      avatarUrl: string;
      twitterHandle?: string;
      brandUrl?: string;
    };
    videoSrc?: string;
    descriptionHtml?: string;
  };
}

export interface UiCalendarCard extends CalendarCard {
  revealed: boolean;
  canReveal: boolean;
}
