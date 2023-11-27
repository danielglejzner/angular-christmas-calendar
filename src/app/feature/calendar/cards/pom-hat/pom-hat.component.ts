import { Component } from '@angular/core';
import { ChristmasCard } from '../../interfaces/christmas-card';
import { ChristmasCardType } from '../../enums/christmas-card-type';

@Component({
  selector: 'xmas-pom-hat',
  standalone: true,
  imports: [],
  templateUrl: './pom-hat.component.html',
  styleUrl: './pom-hat.component.css'
})
export class PomHatComponent implements ChristmasCard{
  readonly type = ChristmasCardType.PomHat;
}
