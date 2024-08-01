import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournoiFormComponent } from './tournoi-form.component';

describe('TournoiFormComponent', () => {
  let component: TournoiFormComponent;
  let fixture: ComponentFixture<TournoiFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TournoiFormComponent]
    });
    fixture = TestBed.createComponent(TournoiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
