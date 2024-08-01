import { Component, OnInit, Inject } from '@angular/core';
import { Player } from 'src/app/models/Player';
import * as PlayersActions from '../../../store/actions/player.actions';
import * as TournoiActions from '../../../store/actions/tournois.actions';
import * as fromPlayer from '../../../store/selectors/player.selectors';
import * as fromTournoi from '../../../store/selectors/tournois.selectors';
import { Store } from '@ngrx/store';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as PlayerToEquipeActions from '../../../store/actions/playerToEquipe.actions';
import { Tournoi } from 'src/app/models/Tournoi';
import { PlayerToEquipe } from 'src/app/models/PlayerToEquipe';

@Component({
  selector: 'app-player-to-equipe',
  templateUrl: './player-to-equipe.component.html',
  styleUrls: ['./player-to-equipe.component.scss']
})
export class PlayerToEquipeComponent implements OnInit {

  dataSource$ = this.store.select(fromPlayer.getPlayers);
  tournoi$ = this.store.select(fromTournoi.getTournois)
  equipeId!: number;
  selectedPlayers: number[] = [];
  playerSearchText: string = '';
  filteredPlayers: Player[] = [];
  playerList: Player[] = [];
  tournoiList: Tournoi[] = [];
  idTournoi: number;
  selectedTournoiId!: number;

  constructor(private store: Store, @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log('Données dans MAT_DIALOG_DATA : ', data);
    this.idTournoi = data.idTournoi;
    console.log('idT : ', this.idTournoi);

  }

  ngOnInit(): void {
    this.equipeId = this.data.equipeId;
    this.store.dispatch(PlayersActions.loadPlayers());
    this.dataSource$.subscribe((players: Player[]) => {
      this.playerList = players;
      console.log('Player List:', this.playerList);
    });

    this.store.dispatch(TournoiActions.loadTournois())
    this.tournoi$.subscribe((tournois: Tournoi[]) => {
      this.tournoiList = tournois;
      console.log('Tournoi List:', this.tournoiList);
    });
  }

  onTournoiSelectionChange(event: any): void {
    this.selectedTournoiId = event.value;
  }

  filterPlayers(): void {
    if (this.playerList) {
      this.filteredPlayers = this.playerList.filter(player =>
        player.nomUser.toLowerCase().includes(this.playerSearchText.toLowerCase())
      );
    } else {
      this.filteredPlayers = [];
    }

    console.log('Filtered players:', this.filteredPlayers);
  }

  onSubmit(): void {
    if (this.selectedPlayers.length > 0 && this.selectedTournoiId) {
      const equipeId = this.data.equipeId;
      const playersToEquipe: PlayerToEquipe[] = this.selectedPlayers.map(playerId => ({
        idEquipe: equipeId,
        idUser: playerId,
        idTournoi: this.selectedTournoiId,
      }));

      console.log(playersToEquipe)

      this.store.dispatch(PlayerToEquipeActions.addPlayerToEquipe({ playerToEquipe: playersToEquipe }));
    }
  }




}
