import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twitterUrl',
  standalone: true
})
export class TwitterUrlPipe implements PipeTransform {
  private readonly twitterBaseUrl = 'https://twitter.com/';

  transform(twitterHandle: string): string {
    return `${this.twitterBaseUrl}${twitterHandle}`;
  }
}
