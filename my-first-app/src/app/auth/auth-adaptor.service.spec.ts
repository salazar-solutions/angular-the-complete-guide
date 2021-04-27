import { TestBed } from '@angular/core/testing';

import { AuthAdaptorService } from './auth-adaptor.service';

describe('AuthAdaptorService', () => {
  let service: AuthAdaptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthAdaptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
