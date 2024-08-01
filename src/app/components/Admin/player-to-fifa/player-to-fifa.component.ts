import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import * as fromPlayer from '../../../store/selectors/player.selectors';
import { Player } from 'src/app/models/Player';
import * as PlayersActions from '../../../store/actions/player.actions';
import * as PlayerToFifa from '../../../store/actions/playerToFifa.actions';

@Component({
  selector: 'app-player-to-fifa',
  templateUrl: './player-to-fifa.component.html',
  styleUrls: ['./player-to-fifa.component.scss']
})
export class PlayerToFifaComponent implements OnInit{

  dataSource$ = this.store.select(fromPlayer.getPlayers);
  tournoiId!: number;
  selectedPlayers: string[] = [];
  playerList: Player[] = [];

  constructor(private store: Store, @Inject(MAT_DIALOG_DATA) public data: any){

  }

  ngOnInit(): void {
    this.tournoiId = this.data.tournoiId;
    this.store.dispatch(PlayersActions.loadPlayers());
    this.dataSource$.subscribe((players: Player[]) => {
      this.playerList = players;
      console.log('Player List:', this.playerList);
    });
  }

  onSubmit(): void {
    if (this.selectedPlayers.length > 0) {
      const tournoiId = this.data.tournoiId;
      this.selectedPlayers.forEach(playerId => {
        const playerToFifa = {
          tournoiId: tournoiId,
          playerId: +playerId
        };
        this.store.dispatch(PlayerToFifa.addPlayerToFifa( {playerToFifa} ));
      });
    }
  }

}
