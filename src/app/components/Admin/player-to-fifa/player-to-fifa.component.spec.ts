import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerToFifaComponent } from './player-to-fifa.component';

describe('PlayerToFifaComponent', () => {
  let component: PlayerToFifaComponent;
  let fixture: ComponentFixture<PlayerToFifaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerToFifaComponent]
    });
    fixture = TestBed.createComponent(PlayerToFifaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
