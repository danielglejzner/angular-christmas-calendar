import { Component } from '@angular/core';
import { ChristmasCard, ChristmasCardType } from '../christmas-card';

@Component({
  selector: 'app-snowflake',
  standalone: true,
  imports: [],
  templateUrl: './snowflake.component.html',
  styleUrl: './snowflake.component.css'
})
export class SnowflakeComponent implements ChristmasCard {
  readonly type = ChristmasCardType.Snowflake;
}
