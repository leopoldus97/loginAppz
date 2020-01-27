import { TestBed } from '@angular/core/testing';

import { AuthenticationServService } from './authentication-serv.service';

describe('AuthenticationServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticationServService = TestBed.get(AuthenticationServService);
    expect(service).toBeTruthy();
  });
});
