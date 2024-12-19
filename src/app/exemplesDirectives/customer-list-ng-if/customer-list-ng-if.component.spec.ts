import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListNgIfComponent } from './customer-list-ng-if.component';

describe('CustomerListNgIfComponent', () => {
  let component: CustomerListNgIfComponent;
  let fixture: ComponentFixture<CustomerListNgIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerListNgIfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerListNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
