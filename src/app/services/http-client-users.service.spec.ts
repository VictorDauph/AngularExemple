import { TestBed } from '@angular/core/testing';

import { HttpClientUsersService } from './http-client-users.service';

describe('HttpClientUsersService', () => {
  let service: HttpClientUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpClientUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
