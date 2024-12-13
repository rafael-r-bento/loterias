import { TestBed } from '@angular/core/testing';

import { LoteriasApiService } from './loterias-api.service';

describe('LoteriasApiService', () => {
  let service: LoteriasApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoteriasApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
