import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChristmasCardType } from '../../enums/christmas-card-type';
import type { ChristmasCard } from '../../interfaces/christmas-card';

@Component({
  selector: 'xmas-snowflake',
  templateUrl: './snowflake.component.html',
  styleUrl: './snowflake.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnowflakeComponent implements ChristmasCard {
  readonly type = ChristmasCardType.Snowflake;
}
