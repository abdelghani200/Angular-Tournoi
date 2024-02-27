import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Equipe } from 'src/app/models/Equipe';
import * as EquipeToTournoiActions from '../../../store/actions/equipeToTournoi.actions';
import * as EquipesActions from '../../../store/actions/equipe.actions';
import * as fromEquipe from '../../../store/selectors/equipe.selectors';

@Component({
  selector: 'app-equipe-to-tournoi',
  templateUrl: './equipe-to-tournoi.component.html',
  styleUrls: ['./equipe-to-tournoi.component.scss']
})
export class EquipeToTournoiComponent implements OnInit{

  dataSource$ = this.store.select(fromEquipe.getEquipes);
  tournoiId!: number;
  selectedEquipes: string[] = [];
  playerSearchText: string = '';
  filteredEquipes: Equipe[] = [];
  equipesList: Equipe[] = [];

  constructor(private store: Store, @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log('Données dans MAT_DIALOG_DATA : ', data);
  }

  ngOnInit(): void {
    this.tournoiId = this.data.tournoiId;
    this.store.dispatch(EquipesActions.loadEquipes());
    this.dataSource$.subscribe((equipes: Equipe[]) => {
      this.equipesList = equipes;
    });
  
    this.filterPlayers();
  }
  
  filterPlayers(): void {
    if (this.equipesList) {
      this.filteredEquipes = this.equipesList.filter(equipe =>
        equipe.nomEquipe.toLowerCase().includes(this.playerSearchText.toLowerCase())
      );
    } else {
      this.filteredEquipes = [];
    }
  }
  

  onSubmit(): void {
    console.log(this.selectedEquipes)
    if (this.selectedEquipes.length) {
      const tournoiId = this.data.tournoiId;
      this.selectedEquipes.forEach(equipeId => {
        const equipeToTournoi = {
          tournoiId: tournoiId,
          equipeId: +equipeId
        };

        this.store.dispatch(EquipeToTournoiActions.addEquipeToTournoi( {equipeToTournoi} ));
      });
    }
  }

}
