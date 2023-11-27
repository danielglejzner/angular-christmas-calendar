import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SnowflakesComponent} from './feature/calendar/core/snowflakes/snowflakes.component';

@Component({
  selector: 'xmas-root',
  standalone: true,
  imports: [RouterOutlet, SnowflakesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
