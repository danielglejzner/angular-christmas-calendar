import { Component } from '@angular/core';
import { ChristmasCard, ChristmasCardType } from '../christmas-card';

@Component({
  selector: 'xmas-elf-hat',
  standalone: true,
  imports: [],
  templateUrl: './elf-hat.component.html',
  styleUrl: './elf-hat.component.css'
})
export class ElfHatComponent implements ChristmasCard {
  readonly type = ChristmasCardType.ElfHat;
}
