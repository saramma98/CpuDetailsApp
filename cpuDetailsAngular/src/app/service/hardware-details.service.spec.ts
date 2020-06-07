import { TestBed } from '@angular/core/testing';

import { HardwareDetailsService } from './hardware-details.service';

describe('HardwareDetailsService', () => {
  let service: HardwareDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardwareDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
