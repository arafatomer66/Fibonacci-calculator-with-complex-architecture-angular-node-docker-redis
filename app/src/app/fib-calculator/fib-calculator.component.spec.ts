import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibCalculatorComponent } from './fib-calculator.component';

describe('FibCalculatorComponent', () => {
  let component: FibCalculatorComponent;
  let fixture: ComponentFixture<FibCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FibCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FibCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
