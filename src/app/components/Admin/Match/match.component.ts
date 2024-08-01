import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as MatchActions from '../../../store/actions/match.actions';
import * as fromMatch from '../../../store/selectors/match.selectors';
import { MatDialog } from '@angular/material/dialog';
import { map } from "rxjs";
import { MatchFormComponent } from 'src/app/shared/form/match-form/match-form.component';
import { Observable } from 'rxjs';
import { Match } from 'src/app/models/Match';


@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {


  dataSource$!: Observable<Match[]>;
  showFifaMatches = false;

  displayedColumns: string[] = ['idMatch', 'dateMatch', 'heureMatch', 'equipe1', 'equipe2', 'actions'];

  constructor(private store: Store, private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.store.dispatch(MatchActions.loadMatchs());

    this.dataSource$ = this.store.select(fromMatch.getMatchs)
      .pipe(
        map(matches => matches.filter(match => match.tournoi.type !== 'Fifa'))
      );

    this.dataSource$.subscribe(data => {
      console.log(data)
    });
  }


  openMatchFormDialog() {
    const dialogRef = this.dialog.open(MatchFormComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  deleteMatch(matchId: number): void {
    if (confirm("Are you sure you want to delete this match?")) {
      this.store.dispatch(MatchActions.deleteMatch({ matchId: matchId }))
    }
  }

  toggleFifaMatches() {
    this.showFifaMatches = !this.showFifaMatches;
    if (this.showFifaMatches) {
      this.dataSource$ = this.store.select(fromMatch.getMatchs)
        .pipe(
          map(matches => matches.filter(match => match.tournoi.type === 'Fifa'))
        );
      this.displayedColumns = ['idMatch', 'dateMatch', 'heureMatch', 'player1', 'player2', 'actions'];
    } else {
      this.dataSource$ = this.store.select(fromMatch.getMatchs)
        .pipe(
          map(matches => matches.filter(match => match.tournoi.type !== 'Fifa'))
        );
      this.displayedColumns = ['idMatch', 'dateMatch', 'heureMatch', 'equipe1', 'equipe2', 'actions'];
    }
  }


}
