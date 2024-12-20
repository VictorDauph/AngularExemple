import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesTestComponent } from './observables-test.component';

describe('ObservablesTestComponent', () => {
  let component: ObservablesTestComponent;
  let fixture: ComponentFixture<ObservablesTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservablesTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservablesTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
