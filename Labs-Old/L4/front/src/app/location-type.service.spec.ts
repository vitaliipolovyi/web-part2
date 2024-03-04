import { TestBed } from '@angular/core/testing';

import { LocationTypeService } from './location-type.service';

describe('LocationTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocationTypeService = TestBed.get(LocationTypeService);
    expect(service).toBeTruthy();
  });
});
