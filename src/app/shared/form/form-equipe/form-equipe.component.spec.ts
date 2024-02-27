import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEquipeComponent } from './form-equipe.component';

describe('FormEquipeComponent', () => {
  let component: FormEquipeComponent;
  let fixture: ComponentFixture<FormEquipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEquipeComponent]
    });
    fixture = TestBed.createComponent(FormEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
