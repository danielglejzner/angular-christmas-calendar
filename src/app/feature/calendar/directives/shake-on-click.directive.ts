import {Directive, ElementRef, HostListener, Input, Renderer2, inject} from '@angular/core';
import {fromEvent, take} from 'rxjs';

@Directive({
  selector: '[shakeWhenDisabled]',
  standalone: true,
})
export class ShakeWhenDisabledDirective {
  private readonly elRef = inject(ElementRef<HTMLLabelElement>);
  private readonly renderer = inject(Renderer2);

  @Input()
  shakeWhenDisabled: boolean = false;

  @HostListener('click', ['$event'])
  onClick() {
    if (this.shakeWhenDisabled) {
      this.renderer.addClass(this.elRef.nativeElement, 'shakeX');

      fromEvent(this.elRef.nativeElement, 'animationend')
        .pipe(take(1))
        .subscribe(() => {
          this.renderer.removeClass(this.elRef.nativeElement, 'shakeX');
        });
    }
  }
}
