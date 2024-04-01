import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as TournoiActions from '../../../store/actions/tournois.actions';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-tournoi-form',
  templateUrl: './tournoi-form.component.html',
  styleUrls: ['./tournoi-form.component.scss']
})
export class TournoiFormComponent implements OnInit{

  tournoiForm!: FormGroup;
  operation: String = 'add'
  tournoiData: any;


  constructor(private formBuilder: FormBuilder,public dialogRef: MatDialogRef<TournoiFormComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private store: Store) {
    this.tournoiData = data?.tournoi;
    this.operation = data?.operation;
    this.initForm();
  }

  ngOnInit(): void {
    console.log("data",this.data.tournoi.id);
    if (this.tournoiData) {
      this.initEditForm(this.tournoiData);
    } else {
      this.initForm();
    }
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
      if (this.operation === 'add') {
        this.store.dispatch(TournoiActions.addTournoi({ tournoi: tournoiData }));
      } else if (this.operation === 'edit') {
        tournoiData.id = this.data.tournoi.id;
        this.store.dispatch(TournoiActions.updateTournoi({ tournoi: tournoiData }));
      }
      this.tournoiForm.reset();
      this.dialogRef.close();
    }
  }

  initEditForm(tournoiData: any): void {
    this.tournoiForm.patchValue({
      nameTournoi: tournoiData.nameTournoi,
      type: tournoiData.type,
      dateDebut: tournoiData.dateDebut,
      dateFin: tournoiData.dateFin
    });
  }
  
  editTournoi(tournoiData: any): void {

    this.initEditForm(tournoiData);
    console.log(this.initEditForm(tournoiData))
  }

  // onBack(): void {
  //   this.router.navigate(['/flexy/home']);
  // }

}
