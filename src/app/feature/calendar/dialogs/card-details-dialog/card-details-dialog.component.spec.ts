import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CardDetailsDialogComponent} from './card-details-dialog.component';
import {DIALOG_DATA, DialogRef} from '@angular/cdk/dialog';
import {ChristmasCardType} from '../../enums/christmas-card-type';
import {UiCalendarCard} from '../../interfaces/christmas-calendar-data';

describe('CardDetailsDialogComponent', () => {
  let component: CardDetailsDialogComponent;
  let fixture: ComponentFixture<CardDetailsDialogComponent>;
  const fakeDialogRef = {
    close: () => {},
  };
  const fakeDialogData: UiCalendarCard = {
    day: ChristmasCardType.Candle,
    revealed: true,
    canReveal: false,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDetailsDialogComponent],
      providers: [
        {provide: DialogRef, useValue: fakeDialogRef},
        {provide: DIALOG_DATA, useValue: fakeDialogData},
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CardDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
