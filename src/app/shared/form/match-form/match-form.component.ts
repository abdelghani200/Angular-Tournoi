import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as MatchActions from '../../../store/actions/match.actions';
import * as TournoiActions from '../../../store/actions/tournois.actions';
import * as EquipeActions from '../../../store/actions/equipe.actions';
import * as PlayerActions from '../../../store/actions/player.actions';
import * as fromTournoi from '../../../store/selectors/tournois.selectors';
import * as fromEquipe from '../../../store/selectors/equipe.selectors';
import * as fromPlayer from '../../../store/selectors/player.selectors';
import { Equipe } from 'src/app/models/Equipe';
import { Tournoi } from 'src/app/models/Tournoi';
import { Observable } from 'rxjs';
import { Player } from 'src/app/models/Player';
import { MatDialogRef } from '@angular/material/dialog';
import { MatchService } from 'src/app/services/match/match.service';

@Component({
  selector: 'app-match-form',
  templateUrl: './match-form.component.html',
  styleUrls: ['./match-form.component.scss']
})
export class MatchFormComponent {


  matchForm!: FormGroup;
  matchForm1!: FormGroup;
  operation: String = 'add'
  equipes$: Observable<Equipe[]>;
  tournois$: Observable<Tournoi[]>;
  players$: Observable<Player[]>
  showPlayerFields: Boolean = false;

  constructor(private formBuilder: FormBuilder,private matchService: MatchService, private router: Router, public dialogRef: MatDialogRef<MatchFormComponent>, private store: Store) {
    this.initForm();
    this.equipes$ = this.store.select(fromEquipe.getEquipes);
    this.tournois$ = this.store.select(fromTournoi.getTournois);
    this.players$ = this.store.select(fromPlayer.getPlayers)
  }

  ngOnInit(): void {
    this.store.dispatch(TournoiActions.loadTournois());
    this.store.dispatch(EquipeActions.loadEquipes());
    this.store.dispatch(PlayerActions.loadPlayers())
  }

  initForm(): void {
    this.matchForm = this.formBuilder.group({
      dateMatch: ['', Validators.required],
      heureMatch: ['', Validators.required],
      tournoiId: ['', Validators.required],
      equipe1Id: [''],
      equipe2Id: [''],
      player1Id: [''],
      player2Id: ['']
    });
  }

  onTournoiSelectionChange(selectedTournoiId: number): void {
    if (selectedTournoiId === 3) {
      this.showPlayerFields = true;
      this.matchForm.get('equipe1Id')?.disable();
      this.matchForm.get('equipe2Id')?.disable();
    } else {
      this.showPlayerFields = false;
      this.matchForm.get('equipe1Id')?.enable();
      this.matchForm.get('equipe2Id')?.enable();
    }
  }


  onSubmit(): void {
    if (this.matchForm.valid) {
      const matchData = this.matchForm.value;
      const selectedTournoiId = this.matchForm.get('tournoiId')?.value;
  
      if (selectedTournoiId === 3) {
        this.matchService.addMatchFifa(matchData).subscribe(() => {
          this.matchForm.reset();
          this.dialogRef.close();
        });
      } else {
        this.store.dispatch(MatchActions.addMatch({ match: matchData }));
        this.matchForm.reset();
        this.dialogRef.close();
      }
    }
  }
  


  onBack(): void {
    this.router.navigate(['/matchListe']);
  }

}
