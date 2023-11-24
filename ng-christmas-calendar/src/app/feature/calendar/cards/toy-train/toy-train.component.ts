import { Component } from '@angular/core';
import { ChristmasCard } from '../../interfaces/christmas-card';
import { ChristmasCardType } from '../../enums/christmas-card-type';

@Component({
  selector: 'xmas-toy-train',
  standalone: true,
  imports: [],
  templateUrl: './toy-train.component.html',
  styleUrl: './toy-train.component.css'
})
export class ToyTrainComponent implements ChristmasCard {
  readonly type = ChristmasCardType.ToyTrain;
}
