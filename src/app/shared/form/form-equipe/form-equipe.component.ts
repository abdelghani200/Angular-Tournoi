import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as EquipeActions from '../../../store/actions/equipe.actions'

@Component({
  selector: 'app-form-equipe',
  templateUrl: './form-equipe.component.html',
  styleUrls: ['./form-equipe.component.scss']
})
export class FormEquipeComponent {

  equipeForm!: FormGroup
  operation: String = 'add'

  constructor(private formBuilder: FormBuilder, private router: Router, private store: Store){
    this.initForm()
  }

  ogOnInit(){

  }

  initForm(): void {
    this.equipeForm = this.formBuilder.group({
      nomEquipe: ['', Validators.required],
      type: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.equipeForm.valid) {
      const equipeData = this.equipeForm.value;
      this.store.dispatch(EquipeActions.addEquipe({ equipe: equipeData }));
      
    }
  }
  

}
