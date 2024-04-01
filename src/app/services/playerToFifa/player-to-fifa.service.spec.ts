import { TestBed } from '@angular/core/testing';

import { PlayerToFifaService } from './player-to-fifa.service';

describe('PlayerToFifaService', () => {
  let service: PlayerToFifaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerToFifaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
