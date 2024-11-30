import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChristmasCardType } from '../../enums/christmas-card-type';
import type { ChristmasCard } from '../../interfaces/christmas-card';

@Component({
  selector: 'xmas-elf-hat',
  templateUrl: './elf-hat.component.html',
  styleUrl: './elf-hat.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElfHatComponent implements ChristmasCard {
  readonly type = ChristmasCardType.ElfHat;
}
