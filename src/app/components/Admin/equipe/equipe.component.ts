import { Component, OnInit } from '@angular/core';
import * as fromEquipe from '../../../store/selectors/equipe.selectors';
import * as EquipActins from '../../../store/actions/equipe.actions';
import { Store } from '@ngrx/store';
import { PlayerToEquipeComponent } from '../player-to-equipe/player-to-equipe.component';
import { MatDialog } from '@angular/material/dialog';
import { FormEquipeComponent } from 'src/app/shared/form/form-equipe/form-equipe.component';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit{

  dataSource$ = this.store.select(fromEquipe.getEquipes);

  displayedColumns: string[] = ['idEquipe', 'nomEquipe', 'type', 'actions'];

  constructor(private store: Store, private dialog: MatDialog){

  }

  ngOnInit(): void {
    this.store.dispatch(EquipActins.loadEquipes());
  }

  openPlayerListPopup(equipeId: number): void {
    const dialogRef = this.dialog.open(PlayerToEquipeComponent, {
      width: '800px',
      data: {equipeId: equipeId, players: this.dataSource$ }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openEquipeFormDialog(){
    const dialogRef = this.dialog.open(FormEquipeComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
