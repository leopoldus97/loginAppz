import { TestBed } from '@angular/core/testing';

import { FirestoreServService } from './firestore-serv.service';

describe('FirestoreServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirestoreServService = TestBed.get(FirestoreServService);
    expect(service).toBeTruthy();
  });
});
