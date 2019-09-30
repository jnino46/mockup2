import { TestBed } from '@angular/core/testing';

import { TripsService } from './services/trips.service';

describe('TripsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TripsService = TestBed.get(TripsService);
    expect(service).toBeTruthy();
  });
});
