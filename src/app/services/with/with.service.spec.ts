import { TestBed } from '@angular/core/testing';

import { WithService } from './with.service';

describe('WithService', () => {
  let service: WithService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WithService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
