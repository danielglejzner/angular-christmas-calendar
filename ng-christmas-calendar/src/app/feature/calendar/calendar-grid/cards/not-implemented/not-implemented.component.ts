import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChristmasCard, ChristmasCardType } from '../christmas-card';

@Component({
  selector: 'app-not-implemented',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './not-implemented.component.html',
  styleUrl: './not-implemented.component.css'
})
export class NotImplementedComponent implements ChristmasCard {
  type!: ChristmasCardType;
}
