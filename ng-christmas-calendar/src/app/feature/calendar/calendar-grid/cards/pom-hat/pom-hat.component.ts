import { Component } from '@angular/core';
import { ChristmasCard, ChristmasCardType } from '../christmas-card';

@Component({
  selector: 'app-pom-hat',
  standalone: true,
  imports: [],
  templateUrl: './pom-hat.component.html',
  styleUrl: './pom-hat.component.css'
})
export class PomHatComponent implements ChristmasCard{
  readonly type = ChristmasCardType.PomHat;
}
