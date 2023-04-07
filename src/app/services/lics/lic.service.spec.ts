import { TestBed } from '@angular/core/testing';

import { LicService } from './lic.service';

describe('LicService', () => {
  let service: LicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
