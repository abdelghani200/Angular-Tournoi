import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromPlayer from '../../../store/selectors/player.selectors';
import * as PlayersActions from '../../../store/actions/player.actions';
import { PlayerToEquipeComponent } from '../player-to-equipe/player-to-equipe.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit{


  dataSource$ = this.store.select(fromPlayer.getPlayers);

  displayedColumns: string[] = ['idUser', 'nomUser', 'prenomUser', 'email', 'role', 'actions'];

  constructor(private store: Store, private dialog: MatDialog){

  }

  ngOnInit(): void {
    this.store.dispatch(PlayersActions.loadPlayers());
  }
  
  openPlayerListPopup(): void {
    const dialogRef = this.dialog.open(PlayerToEquipeComponent, {
      width: '400px',
      data: { players: this.dataSource$ }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
