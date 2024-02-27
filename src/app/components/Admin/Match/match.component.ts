import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as MatchActions from '../../../store/actions/match.actions';
import * as fromMatch from '../../../store/selectors/match.selectors';
import { MatDialog } from '@angular/material/dialog';
import { MatchFormComponent } from 'src/app/shared/form/match-form/match-form.component';


@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit{


  dataSource$ = this.store.select(fromMatch.getMatchs);

  displayedColumns: string[] = ['idMatch', 'dateMatch', 'heureMatch', 'equipe1', 'equipe2', 'actions'];

  constructor(private store: Store, private dialog: MatDialog){

  }

  ngOnInit(): void {
    this.store.dispatch(MatchActions.loadMatchs());
  }


  openMatchFormDialog(){
    const dialogRef = this.dialog.open(MatchFormComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
