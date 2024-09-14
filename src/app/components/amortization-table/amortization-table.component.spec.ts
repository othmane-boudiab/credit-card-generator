import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmortizationTableComponent } from './amortization-table.component';

describe('AmortizationTableComponent', () => {
  let component: AmortizationTableComponent;
  let fixture: ComponentFixture<AmortizationTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmortizationTableComponent]
    });
    fixture = TestBed.createComponent(AmortizationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
