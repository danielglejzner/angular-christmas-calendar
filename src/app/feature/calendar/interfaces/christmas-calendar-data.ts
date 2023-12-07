import {ChristmasCardType} from '../enums/christmas-card-type';

export interface SocialAccountsData {
  twitterHandle?: string;
  linkedInUrl?: string;
}

interface Author {
  name: string;
  avatarUrl: string;
  socialAccountsData?: SocialAccountsData;
  brandExternalUrl?: string;
  brandImageUrl?: string;
}

export interface Content {
  author: Author;
  videoSrc?: string;
  descriptionHtml?: string;
}

export interface CalendarCard {
  day: ChristmasCardType;
  contents?: Content[];
}

export interface UiCalendarCard extends CalendarCard {
  revealed: boolean;
  canReveal: boolean;
}
