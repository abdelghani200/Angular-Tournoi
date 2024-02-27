import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoolComponent } from './gool.component';

describe('GoolComponent', () => {
  let component: GoolComponent;
  let fixture: ComponentFixture<GoolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoolComponent]
    });
    fixture = TestBed.createComponent(GoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
