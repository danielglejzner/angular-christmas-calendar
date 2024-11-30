import type { PipeTransform } from '@angular/core';
import { Pipe, inject } from '@angular/core';
import type { SafeHtml, SafeResourceUrl, SafeScript, SafeStyle, SafeUrl } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe',
})
export class SafePipe implements PipeTransform {
  private readonly sanitizer = inject(DomSanitizer);

  transform(value: string, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    switch (type) {
      case 'html':
        return this.sanitizer.bypassSecurityTrustHtml(value);
      case 'style':
        return this.sanitizer.bypassSecurityTrustStyle(value);
      case 'script':
        return this.sanitizer.bypassSecurityTrustScript(value);
      case 'url':
        return this.sanitizer.bypassSecurityTrustUrl(value);
      case 'resourceUrl':
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
      default:
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
  }
}
