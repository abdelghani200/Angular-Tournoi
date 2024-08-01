import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerToEquipeComponent } from './player-to-equipe.component';

describe('PlayerToEquipeComponent', () => {
  let component: PlayerToEquipeComponent;
  let fixture: ComponentFixture<PlayerToEquipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerToEquipeComponent]
    });
    fixture = TestBed.createComponent(PlayerToEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
