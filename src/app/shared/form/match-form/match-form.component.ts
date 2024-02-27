import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as MatchActions from '../../../store/actions/match.actions';
import * as TournoiActions from '../../../store/actions/tournois.actions';
import * as EquipeActions from '../../../store/actions/equipe.actions';
import * as fromTournoi from '../../../store/selectors/tournois.selectors';
import * as fromEquipe from '../../../store/selectors/equipe.selectors';
import { Equipe } from 'src/app/models/Equipe';
import { Tournoi } from 'src/app/models/Tournoi';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-match-form',
  templateUrl: './match-form.component.html',
  styleUrls: ['./match-form.component.scss']
})
export class MatchFormComponent {


  matchForm!: FormGroup;
  operation: String = 'add'
  equipes$: Observable<Equipe[]>;
  tournois$: Observable<Tournoi[]>;

  constructor(private formBuilder: FormBuilder, private router: Router, private store: Store) {
    this.initForm();
    this.equipes$ = this.store.select(fromEquipe.getEquipes);
    this.tournois$ = this.store.select(fromTournoi.getTournois);
  }

  ngOnInit(): void {
    this.store.dispatch(TournoiActions.loadTournois());
    this.store.dispatch(EquipeActions.loadEquipes());
  }

  initForm(): void {
    this.matchForm = this.formBuilder.group({
      dateMatch: ['', Validators.required],
      heureMatch: ['', Validators.required],
      tournoiId: ['', Validators.required],
      equipe1Id: ['', Validators.required],
      equipe2Id: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.matchForm.valid) {
      const matchData = this.matchForm.value;
      this.store.dispatch(MatchActions.addMatch({ match: matchData }));
      
    }
  }
  

  onBack(): void {
    this.router.navigate(['/matchListe']);
  }

}
