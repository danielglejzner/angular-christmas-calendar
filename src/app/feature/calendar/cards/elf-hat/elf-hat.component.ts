import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChristmasCard } from '../../interfaces/christmas-card';
import { ChristmasCardType } from '../../enums/christmas-card-type';

@Component({
  selector: 'xmas-elf-hat',
  standalone: true,
  imports: [],
  templateUrl: './elf-hat.component.html',
  styleUrl: './elf-hat.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElfHatComponent implements ChristmasCard {
  readonly type = ChristmasCardType.ElfHat;
}
