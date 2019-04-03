import { TestBed } from '@angular/core/testing';

import { SalesConsultantsService } from './sales-consultants.service';

describe('SalesConsultantsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalesConsultantsService = TestBed.get(SalesConsultantsService);
    expect(service).toBeTruthy();
  });
});
