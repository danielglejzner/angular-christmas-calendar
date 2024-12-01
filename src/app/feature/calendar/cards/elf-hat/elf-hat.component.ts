import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xmas-elf-hat',
  templateUrl: './elf-hat.component.html',
  styleUrl: './elf-hat.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElfHatComponent {}
