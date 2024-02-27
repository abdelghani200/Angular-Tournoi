import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeToTournoiComponent } from './equipe-to-tournoi.component';

describe('EquipeToTournoiComponent', () => {
  let component: EquipeToTournoiComponent;
  let fixture: ComponentFixture<EquipeToTournoiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipeToTournoiComponent]
    });
    fixture = TestBed.createComponent(EquipeToTournoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
