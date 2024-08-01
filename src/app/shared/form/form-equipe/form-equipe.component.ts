import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import * as EquipeActions from '../../../store/actions/equipe.actions'

@Component({
  selector: 'app-form-equipe',
  templateUrl: './form-equipe.component.html',
  styleUrls: ['./form-equipe.component.scss']
})
export class FormEquipeComponent implements OnInit {

  equipeForm!: FormGroup
  operation: String = 'add';
  equipeData: any;

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<FormEquipeComponent>, private store: Store, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.equipeData = data?.equipe;
    this.operation = data?.operation;
    this.initForm();
  }

  ngOnInit(): void {
    console.log("12 data",this.data.equipe.idEquipe);

    if (this.equipeData) {
      this.initEditForm(this.equipeData);
    } else {
      this.initForm();
    }
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
      console.log(equipeData)
      if (this.operation === 'add') {
        this.store.dispatch(EquipeActions.addEquipe({ equipe: equipeData }));
      } else if (this.operation === 'edit') {
        equipeData.idEquipe = this.data.equipe.idEquipe;
        console.log(equipeData.idEquipe)
        this.store.dispatch(EquipeActions.updateEquipe({ equipe: equipeData }));
      }
      this.equipeForm.reset();
      this.dialogRef.close();
    }
  }
  

  initEditForm(equipeData: any): void {
    this.equipeForm.patchValue({
      nomEquipe: equipeData.nomEquipe,
      type: equipeData.type
    });
  }


  editEquipe(equipeData: any): void {

    this.initEditForm(equipeData);
    console.log(this.initEditForm(equipeData))
  }






}
