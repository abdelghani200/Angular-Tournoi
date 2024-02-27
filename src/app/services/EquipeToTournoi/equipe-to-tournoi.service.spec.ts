import { TestBed } from '@angular/core/testing';

import { EquipeToTournoiService } from './equipe-to-tournoi.service';

describe('EquipeToTournoiService', () => {
  let service: EquipeToTournoiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipeToTournoiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
