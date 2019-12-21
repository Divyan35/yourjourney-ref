import { TestBed } from '@angular/core/testing';

import { TraveltimeDataService } from './traveltime-data.service';

describe('TraveltimeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TraveltimeDataService = TestBed.get(TraveltimeDataService);
    expect(service).toBeTruthy();
  });
});
