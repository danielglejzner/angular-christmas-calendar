import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailsDialogComponent } from './card-details-dialog.component';

describe('CardDetailsDialogComponent', () => {
  let component: CardDetailsDialogComponent;
  let fixture: ComponentFixture<CardDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDetailsDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
