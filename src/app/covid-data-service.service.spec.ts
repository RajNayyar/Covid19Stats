import { TestBed } from '@angular/core/testing';

import { CovidDataServiceService } from './covid-data-service.service';

describe('CovidDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CovidDataServiceService = TestBed.get(CovidDataServiceService);
    expect(service).toBeTruthy();
  });
});
