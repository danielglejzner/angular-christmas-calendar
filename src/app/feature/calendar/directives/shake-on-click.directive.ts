import { DestroyRef, Directive, ElementRef, Input, Renderer2, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent, take } from 'rxjs';
import { SoundService } from '../services/sound.service';

@Directive({
  selector: '[xmasShakeWhenDisabled]',
  standalone: true,
  host: {
    '(click)': 'cardClicked()',
  },
})
export class ShakeWhenDisabledDirective {
  private readonly destroyRef = inject(DestroyRef);
  private readonly elRef = inject(ElementRef<HTMLLabelElement>);
  private readonly renderer = inject(Renderer2);
  private readonly soundService = inject(SoundService);

  @Input() xmasShakeWhenDisabled = false;

  protected cardClicked(): void {
    if (this.xmasShakeWhenDisabled) {
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
