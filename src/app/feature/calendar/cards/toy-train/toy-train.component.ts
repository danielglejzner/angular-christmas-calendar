import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xmas-toy-train',
  templateUrl: './toy-train.component.html',
  styleUrl: './toy-train.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToyTrainComponent {}
