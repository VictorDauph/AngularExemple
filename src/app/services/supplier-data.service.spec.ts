import { TestBed } from '@angular/core/testing';

import { SupplierDataService } from './supplier-data.service';

describe('SupplierDataService', () => {
  let service: SupplierDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupplierDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
