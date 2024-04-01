import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { combineLatest, BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as fromMatch from '../../../store/selectors/match.selectors';
import * as fromEquipe from '../../../store/selectors/equipe.selectors';
import * as fromPlayer from '../../../store/selectors/player.selectors';
import * as ActionEquipe from '../../../store/actions/equipe.actions';
import * as ActionPlayer from '../../../store/actions/player.actions';
import * as ActionMatch from '../../../store/actions/match.actions';
import { EquipeWithPlayer } from 'src/app/models/EquipeWithPlayer';
import { WithService } from 'src/app/services/with/with.service';
import * as GoalActions from '../../../store/actions/gool.actions';
import { Match } from 'src/app/models/Match';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.scss']
})
export class GoalFormComponent implements OnInit {

  goalForm!: FormGroup
  operation: string = 'add'

  playersOfEquipe: EquipeWithPlayer[] = [];
  equipeId: number | null = null;
  fifaMatches!: Match[]

  selectedMatch: any;

  matchList$ = this.store.select(fromMatch.getMatchs)
  equipeList$ = this.store.select(fromEquipe.getEquipes)
  playerList$ = this.store.select(fromPlayer.getPlayers)

  private matchIdSubject = new BehaviorSubject<number | null>(null);
  matchId$ = this.matchIdSubject.asObservable();

  filteredEquipeList$ = combineLatest([this.matchList$, this.equipeList$, this.matchId$]).pipe(
    map(([matches, equipes, matchId]) => {
      if (!matchId) return equipes;
      const selectedMatch = matches.find(match => match.idMatch === matchId);
      if (!selectedMatch) return [];
      return equipes.filter(equipe => equipe.idEquipe === selectedMatch.equipe1.idEquipe || equipe.idEquipe === selectedMatch.equipe2.idEquipe);
    })
  );

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, private store: Store, private withService: WithService) {
    this.initForm()
  }

  ngOnInit(): void {

    this.store.dispatch(ActionEquipe.loadEquipes())
    this.store.dispatch(ActionPlayer.loadPlayers())
    this.store.dispatch(ActionMatch.loadMatchs())

    this.matchList$.subscribe(matches => {
      this.fifaMatches = matches.filter(match => match.tournoi.type === 'Fifa');
      console.log(this.fifaMatches)
    });

    this.goalForm.get('matchId')?.valueChanges.subscribe(matchId => {
      this.matchIdSubject.next(matchId);
      this.selectedMatch = this.fifaMatches.find(match => match.idMatch === matchId);
    });
  }

  getPlayersByEquipeId(equipeId: number): void {
    this.withService.getPlayersByOneEquipe(equipeId).subscribe(
      (data: EquipeWithPlayer[]) => {
        console.log('Données reçues : ', data);

        this.playersOfEquipe = data
      },
      (error) => {
        console.error('Erreur lors de la récupération des joueurs pour l\'équipe : ', error);
      }
    );
  }

  onEquipeSelectionChange(equipeId: number): void {
    this.equipeId = equipeId;
    if (this.equipeId) {
      this.getPlayersByEquipeId(this.equipeId);
    }
  }


  initForm(): void {
    this.goalForm = this.formBuilder.group({
      matchId: ['', Validators.required],
      equipeId: ['', Validators.required],
      playerId: ['', Validators.required],
      numberOfGoal: ['', Validators.required]
    })
  }

  onSubmit() {

    const goalData = this.goalForm.value;

    console.log('Goal Data:', goalData);

    if (this.selectedMatch && this.selectedMatch.tournoi.type === 'Fifa') {
      delete goalData.equipeId;
    }

    console.log('Adjusted Goal Data:', goalData);

    this.store.dispatch(GoalActions.addGoal({ goal: goalData }));

  }



}
