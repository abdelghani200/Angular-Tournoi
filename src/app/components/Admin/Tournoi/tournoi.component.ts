import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import * as fromTournoi from '../../../store/selectors/tournois.selectors';
import * as TournoiActions from '../../../store/actions/tournois.actions';
import { TournoiFormComponent } from 'src/app/shared/form/tournoi-form/tournoi-form.component';
import { EquipeToTournoiComponent } from '../equipe-to-tournoi/equipe-to-tournoi.component';

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

  openTournoiFormDialog(tournoiId: number): void {
    const dialogRef = this.dialog.open(EquipeToTournoiComponent, {
      width: '500px',
      data: {tournoiId: tournoiId, players: this.dataSource$ }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }

  openEquipeListPopup(): void {
    const dialogRef = this.dialog.open(TournoiFormComponent, {
      width: '800px',
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }



}
