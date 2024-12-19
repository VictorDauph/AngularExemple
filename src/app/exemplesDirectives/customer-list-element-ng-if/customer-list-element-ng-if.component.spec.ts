import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListElementNgIfComponent } from './customer-list-element-ng-if.component';

describe('CustomerListElementNgIfComponent', () => {
  let component: CustomerListElementNgIfComponent;
  let fixture: ComponentFixture<CustomerListElementNgIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerListElementNgIfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerListElementNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
