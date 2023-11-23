import { Component } from '@angular/core';
import { ChristmasCard, ChristmasCardType } from '../christmas-card';

@Component({
  selector: 'app-toy-train',
  standalone: true,
  imports: [],
  templateUrl: './toy-train.component.html',
  styleUrl: './toy-train.component.css'
})
export class ToyTrainComponent implements ChristmasCard {
  readonly type = ChristmasCardType.ToyTrain;
}
