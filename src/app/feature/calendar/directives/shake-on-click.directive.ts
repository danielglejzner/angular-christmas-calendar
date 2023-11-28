import {DestroyRef, Directive, ElementRef, Input, Renderer2, inject} from '@angular/core';
import {fromEvent, take} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Directive({
  selector: '[shakeWhenDisabled]',
  standalone: true,
  host: {
    '(click)': 'cardClicked()',
  },
})
export class ShakeWhenDisabledDirective {
  private readonly destroyRef = inject(DestroyRef);
  private readonly elRef = inject(ElementRef<HTMLLabelElement>);
  private readonly renderer = inject(Renderer2);

  @Input() shakeWhenDisabled: boolean = false;

  protected cardClicked() {
    if (this.shakeWhenDisabled) {
      this.renderer.addClass(this.elRef.nativeElement, 'shakeX');

      fromEvent(this.elRef.nativeElement, 'animationend')
        .pipe(take(1), takeUntilDestroyed(this.destroyRef))
        .subscribe(() => {
          this.renderer.removeClass(this.elRef.nativeElement, 'shakeX');
        });
    }
  }
}
