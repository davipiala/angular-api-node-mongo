import { TestBed } from '@angular/core/testing';

import { ArquitetosService } from './arquitetos.service';

describe('ArquitetosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArquitetosService = TestBed.get(ArquitetosService);
    expect(service).toBeTruthy();
  });
});
