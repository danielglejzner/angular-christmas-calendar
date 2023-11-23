import { Component } from '@angular/core';
import { ChristmasCard, ChristmasCardType } from '../christmas-card';

@Component({
  selector: 'app-christmas-lights',
  standalone: true,
  imports: [],
  templateUrl: './christmas-lights.component.html',
  styleUrl: './christmas-lights.component.css'
})
export class ChristmasLightsComponent implements ChristmasCard {
  readonly type = ChristmasCardType.ChristmasLights;
}
