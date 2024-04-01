import { Component, OnInit } from '@angular/core';
import * as fromEquipe from '../../../store/selectors/equipe.selectors';
import * as EquipActins from '../../../store/actions/equipe.actions';
import { Store } from '@ngrx/store';
import { PlayerToEquipeComponent } from '../player-to-equipe/player-to-equipe.component';
import { MatDialog } from '@angular/material/dialog';
import { FormEquipeComponent } from 'src/app/shared/form/form-equipe/form-equipe.component';
import { map, take } from 'rxjs/operators';
import * as PlayerToEquipeActions from '../../../store/actions/playerToEquipe.actions';
import { DialogContentComponent } from 'src/app/shared/list/dialog-content/dialog-content.component';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit {

  isEditMode: boolean = false;


  dataSource$ = this.store.select(fromEquipe.getEquipes);

  displayedColumns: string[] = ['idEquipe', 'nomEquipe', 'type', 'actions'];

  playerColumns: string[] = ['nomJoueur', 'prenomJoueur'];


  constructor(private store: Store, private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.store.dispatch(EquipActins.loadEquipes());
  }

  openPlayerListPopup(equipeId: number): void {
    const dialogRef = this.dialog.open(PlayerToEquipeComponent, {
      width: '800px',
      data: { equipeId: equipeId, players: this.dataSource$ }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openEquipeFormDialog() {
    const dialogRef = this.dialog.open(FormEquipeComponent, {
      width: '500px',
      data: { operation: 'add' }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  deleteEquipe(equipeId: number): void {
    if (confirm("Are you sure you want to delete this equipe?")) {
      this.store.dispatch(EquipActins.deleteEquipe({ equipeId: equipeId }));
    }
  }

  editEquipe(equipeId: number): void {
    this.dataSource$.pipe(
      take(1),
      map(equipes => equipes.find(equipe => equipe.idEquipe === equipeId))
    ).subscribe(equipeToEdit => {
      this.openEquipeFormEditDialog(equipeToEdit);
    });
  }

  openEquipeFormEditDialog(equipeData: any) {
    console.log(equipeData)
    const dialogRef = this.dialog.open(FormEquipeComponent, {
      width: '500px',
      data: { equipe: equipeData, operation: 'edit' }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openShowEquipeDialog(equipeId: number): void {
    this.store.dispatch(PlayerToEquipeActions.getPlayersOfEquipe({ id: equipeId }));

    const dialogRef = this.dialog.open(DialogContentComponent, {
      width: '800px',
      data: { dataSource$: this.dataSource$ }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }






}
