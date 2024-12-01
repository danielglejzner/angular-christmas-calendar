import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xmas-snowflake',
  templateUrl: './snowflake.component.html',
  styleUrl: './snowflake.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnowflakeComponent {}
