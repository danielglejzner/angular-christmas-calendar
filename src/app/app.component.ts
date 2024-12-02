import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SnowflakesComponent } from './feature/calendar/core/snowflakes/snowflakes.component';

@Component({
  selector: 'xmas-root',
  imports: [RouterOutlet, SnowflakesComponent],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
