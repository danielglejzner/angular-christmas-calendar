import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarGridComponent } from './calendar-grid.component';

describe('CalendarGridComponent', () => {
  let component: CalendarGridComponent;
  let fixture: ComponentFixture<CalendarGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalendarGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
