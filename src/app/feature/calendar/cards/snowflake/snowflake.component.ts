import { Component } from '@angular/core';
import { ChristmasCard } from '../../interfaces/christmas-card';
import { ChristmasCardType } from '../../enums/christmas-card-type';

@Component({
  selector: 'xmas-snowflake',
  standalone: true,
  imports: [],
  templateUrl: './snowflake.component.html',
  styleUrl: './snowflake.component.css'
})
export class SnowflakeComponent implements ChristmasCard {
  readonly type = ChristmasCardType.Snowflake;
}
