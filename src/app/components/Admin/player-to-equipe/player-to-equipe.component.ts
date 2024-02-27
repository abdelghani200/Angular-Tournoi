import { Component, OnInit, Inject } from '@angular/core';
import { Player } from 'src/app/models/Player';
import * as PlayersActions from '../../../store/actions/player.actions';
import * as fromPlayer from '../../../store/selectors/player.selectors';
import { Store } from '@ngrx/store';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as PlayerToEquipeActions from '../../../store/actions/playerToEquipe.actions';

@Component({
  selector: 'app-player-to-equipe',
  templateUrl: './player-to-equipe.component.html',
  styleUrls: ['./player-to-equipe.component.scss']
})
export class PlayerToEquipeComponent implements OnInit {

  dataSource$ = this.store.select(fromPlayer.getPlayers);
  equipeId!: number;
  selectedPlayers: string[] = [];
  playerSearchText: string = '';
  filteredPlayers: Player[] = [];
  playerList: Player[] = [];

  constructor(private store: Store, @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log('Données dans MAT_DIALOG_DATA : ', data);
  }

  ngOnInit(): void {
    this.equipeId = this.data.equipeId;
    this.store.dispatch(PlayersActions.loadPlayers());
    this.dataSource$.subscribe((players: Player[]) => {
      this.playerList = players;
      console.log('Player List:', this.playerList);
    });
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
    if (this.selectedPlayers.length > 0) {
      const equipeId = this.data.equipeId;
      this.selectedPlayers.forEach(playerId => {
        const playerToEquipe = {
          idEquipe: equipeId,
          idUser: +playerId
        };
        this.store.dispatch(PlayerToEquipeActions.addPlayerToEquipe( {playerToEquipe} ));
      });
    }
  }
  
  


}
