import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import * as fromTournoi from '../../../store/selectors/tournois.selectors';
import * as TournoiActions from '../../../store/actions/tournois.actions';
import { TournoiFormComponent } from 'src/app/shared/form/tournoi-form/tournoi-form.component';
import { EquipeToTournoiComponent } from '../equipe-to-tournoi/equipe-to-tournoi.component';
import { PlayerToFifaComponent } from '../player-to-fifa/player-to-fifa.component';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-tournoi',
  templateUrl: './tournoi.component.html',
  styleUrls: ['./tournoi.component.scss']
})
export class TournoiComponent implements OnInit{

  dataSource$ = this.store.select(fromTournoi.getTournois);

  displayedColumns: string[] = ['id', 'nameTournoi', 'type', 'dateDebut', 'dateFin', 'actions'];


  constructor(private dialog: MatDialog, private store: Store){

  }

  ngOnInit(): void {
    this.store.dispatch(TournoiActions.loadTournois());
  }

  openTournoiFormDialog(tournoiId: number, tournoiType: string): void {
    if (tournoiType === 'Fifa') {
      const dialogRef = this.dialog.open(PlayerToFifaComponent, {
        width: '500px',
        data: {tournoiId: tournoiId, players: this.dataSource$ }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    } else {
      const dialogRef = this.dialog.open(EquipeToTournoiComponent, {
        width: '500px',
        data: {tournoiId: tournoiId, players: this.dataSource$ }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }

  deleteTournoi(tournoiId: number): void {
    if (confirm("Are you sure you want to delete this tournoi?")) {
      this.store.dispatch(TournoiActions.deleteTournoi({ tournoiId: tournoiId }));
    }
  }

  editTournoi(tournoiId: number): void {
    this.dataSource$.pipe(
      take(1),
      map(tournois => tournois.find(tournoi => tournoi.id === tournoiId))
    ).subscribe(tournoiToEdit => {
      this.openTournoiFormEditDialog(tournoiToEdit);
    });
  }

  openEquipeListPopup(): void {
    const dialogRef = this.dialog.open(TournoiFormComponent, {
      width: '800px',
      data: { operation: 'add' }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openTournoiFormEditDialog(tournoiData: any) {
    const dialogRef = this.dialog.open(TournoiFormComponent, {
      width: '500px',
      data: { tournoi: tournoiData, operation: 'edit' }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



}
