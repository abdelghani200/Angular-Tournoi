import { TestBed } from '@angular/core/testing';

import { PlayerToEquipeService } from './player-to-equipe.service';

describe('PlayerToEquipeService', () => {
  let service: PlayerToEquipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerToEquipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
