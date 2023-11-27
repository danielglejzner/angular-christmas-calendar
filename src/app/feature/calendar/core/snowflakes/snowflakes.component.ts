import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  Renderer2,
  ViewChild,
  inject,
} from '@angular/core';
import {DOCUMENT} from '@angular/common';

function randomize(min: number, max: number, round = false) {
  const randomPick = Math.random() * (max - min) + min;
  return round ? Math.round(randomPick) : randomPick;
}

function calcAnimationDelay(flakeIndex: number, totalSnowCount: number) {
  return flakeIndex < totalSnowCount * 0.1 ? randomize(0, 0.5) : randomize(0.35, 18);
}

@Component({
  selector: 'xmas-snowflakes',
  standalone: true,
  imports: [],
  templateUrl: './snowflakes.component.html',
  styleUrl: './snowflakes.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnowflakesComponent implements AfterViewInit {
  @ViewChild('snowArea') snowArea!: ElementRef<HTMLSpanElement>;

  #zone = inject(NgZone);
  #document = inject(DOCUMENT);
  #renderer = inject(Renderer2);

  ngAfterViewInit(): void {
    this.letItSnow();
  }

  private letItSnow() {
    this.#zone.runOutsideAngular(() => {
      const totalSnowCount = this.#document.body.clientWidth * 0.25;

      for (let i = 0; i <= totalSnowCount; i++) {
        const snowflake = this.createsnowflake();

        const animationDelay = calcAnimationDelay(i, totalSnowCount);
        snowflake.style.animationDelay = `${animationDelay}s`;

        this.#renderer.appendChild(this.snowArea.nativeElement, snowflake);
      }
    });
  }

  private createsnowflake() {
    const snowflake = this.#renderer.createElement('span') as HTMLSpanElement;
    const size = randomize(0.15, 0.85);

    const leftPos = randomize(0, 100);
    snowflake.classList.add('snowflake');
    snowflake.classList.add(`c${randomize(1, 3, true)}`);
    snowflake.style.left = `${leftPos}%`;
    snowflake.style.width = `${size}vw`;
    snowflake.style.height = `${size}vw`;
    snowflake.style.setProperty('--drift', `${leftPos + 2}%`);

    return snowflake;
  }
}
