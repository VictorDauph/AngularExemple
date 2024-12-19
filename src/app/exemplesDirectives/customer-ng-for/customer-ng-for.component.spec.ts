import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerNgForComponent } from './customer-ng-for.component';

describe('CustomerNgForComponent', () => {
  let component: CustomerNgForComponent;
  let fixture: ComponentFixture<CustomerNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerNgForComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
