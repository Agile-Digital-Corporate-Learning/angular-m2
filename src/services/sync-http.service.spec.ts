import { TestBed } from '@angular/core/testing';

import { SyncHttpService } from './sync-http.service';

describe('SynchttpService', () => {
  let service: SyncHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SyncHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
