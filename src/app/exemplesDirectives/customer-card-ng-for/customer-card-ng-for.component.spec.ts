import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCardNgForComponent } from './customer-card-ng-for.component';

describe('CustomerCardNgForComponent', () => {
  let component: CustomerCardNgForComponent;
  let fixture: ComponentFixture<CustomerCardNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerCardNgForComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerCardNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
