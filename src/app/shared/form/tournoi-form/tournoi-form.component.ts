import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as TournoiActions from '../../../store/actions/tournois.actions';

@Component({
  selector: 'app-tournoi-form',
  templateUrl: './tournoi-form.component.html',
  styleUrls: ['./tournoi-form.component.scss']
})
export class TournoiFormComponent {

  tournoiForm!: FormGroup;
  operation: String = 'add'

  constructor(private formBuilder: FormBuilder, private router: Router, private store: Store) {
    this.initForm();
  }

  ngOnInit(): void {

  }

  initForm(): void {
    this.tournoiForm = this.formBuilder.group({
      nameTournoi: ['', Validators.required],
      type: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.tournoiForm.valid) {
      const tournoiData = this.tournoiForm.value;
      this.store.dispatch(TournoiActions.addTournoi({ tournoi: tournoiData }));
      
    }
  }
  

  onBack(): void {
    this.router.navigate(['/flexy/home']);
  }

}
