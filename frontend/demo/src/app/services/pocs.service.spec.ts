import { TestBed } from '@angular/core/testing';

import { PocsService } from './pocs.service';

describe('PocsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PocsService = TestBed.get(PocsService);
    expect(service).toBeTruthy();
  });
});
