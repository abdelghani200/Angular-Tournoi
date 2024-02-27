import { TestBed } from '@angular/core/testing';

import { GoolService } from './gool.service';

describe('GoolService', () => {
  let service: GoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
