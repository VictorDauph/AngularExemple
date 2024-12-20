import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpUsersComponentComponent } from './http-users-component.component';

describe('HttpUsersComponentComponent', () => {
  let component: HttpUsersComponentComponent;
  let fixture: ComponentFixture<HttpUsersComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpUsersComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpUsersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
