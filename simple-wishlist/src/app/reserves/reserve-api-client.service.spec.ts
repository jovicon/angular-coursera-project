import { TestBed } from '@angular/core/testing';

import { ReserveApiClientService } from './reserve-api-client.service';

describe('ReserveApiClientService', () => {
  let service: ReserveApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReserveApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
