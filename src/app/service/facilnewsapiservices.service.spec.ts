import { TestBed } from '@angular/core/testing';

import { FacilnewsapiservicesService } from './facilnewsapiservices.service';

describe('FacilnewsapiservicesService', () => {
  let service: FacilnewsapiservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacilnewsapiservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
