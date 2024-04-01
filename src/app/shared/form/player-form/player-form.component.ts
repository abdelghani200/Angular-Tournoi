import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import * as PlayerActions from '../../../store/actions/player.actions';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit {

  playerForm!: FormGroup

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, private store: Store, public dialogRef: MatDialogRef<PlayerFormComponent>) {
    this.initForm()
  }

  ngOnInit(): void {

  }

  initForm(): void {
    this.playerForm = this.formBuilder.group({
      nomUser: ['', Validators.required],
      prenomUser: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  onSubmit(): void {
    if (this.playerForm.valid) {
      const playerData = this.playerForm.value;
      this.store.dispatch(PlayerActions.updatePlayer({ player: playerData }));
      this.playerForm.reset();
      this.dialogRef.close();
    }
  }

}
