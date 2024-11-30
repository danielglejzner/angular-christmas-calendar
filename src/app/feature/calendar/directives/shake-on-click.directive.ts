import type { InputSignal } from '@angular/core';
import { DestroyRef, Directive, ElementRef, Renderer2, inject, input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent, take } from 'rxjs';
import { SoundService } from '../services/sound.service';

@Directive({
  selector: '[xmasShakeWhenDisabled]',
  host: {
    '(click)': 'cardClicked()',
  },
})
export class ShakeWhenDisabledDirective {
  private readonly destroyRef = inject(DestroyRef);
  private readonly elRef = inject(ElementRef<HTMLLabelElement>);
  private readonly renderer = inject(Renderer2);
  private readonly soundService = inject(SoundService);

  readonly xmasShakeWhenDisabled: InputSignal<boolean> = input(false);

  protected cardClicked(): void {
    if (this.xmasShakeWhenDisabled()) {
      this.renderer.addClass(this.elRef.nativeElement, 'shakeX');

      fromEvent(this.elRef.nativeElement, 'animationend')
        .pipe(take(1), takeUntilDestroyed(this.destroyRef))
        .subscribe(() => {
          this.renderer.removeClass(this.elRef.nativeElement, 'shakeX');
        });

      this.soundService.playSound();
    }
  }
}
