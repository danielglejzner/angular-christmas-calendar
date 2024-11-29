import { Pipe, PipeTransform } from '@angular/core';
import { SocialAccountsData } from '../interfaces/christmas-calendar-data';

@Pipe({
  name: 'socialProfileUrl',
  standalone: true,
})
export class SocialProfileUrlPipe implements PipeTransform {
  private readonly twitterBaseUrl = 'https://twitter.com/';

  // Let's make it simple. Once twitterHandle is provided then return link to twitter profile, otherwise return linkedIn profile URL.
  // When non of them are provide throw an error.
  transform(socialAccountsData: SocialAccountsData): string {
    if (socialAccountsData.twitterHandle) {
      return `${this.twitterBaseUrl}${socialAccountsData.twitterHandle}`;
    }
    if (socialAccountsData.linkedInUrl) {
      return socialAccountsData.linkedInUrl;
    }

    throw new Error(`Invalid configuration of socialAccountsData. You have to provide twitterHandle or linkedInUrl`);
  }
}
