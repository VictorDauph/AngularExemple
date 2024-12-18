import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputEnfantComponent } from './output-enfant.component';

describe('OutputEnfantComponent', () => {
  let component: OutputEnfantComponent;
  let fixture: ComponentFixture<OutputEnfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputEnfantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
