import { Component, OnInit } from '@angular/core';
import * as MatchActions from '../../../store/actions/match.actions';
import * as fromMatch from '../../../store/selectors/match.selectors';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TypeTournoi } from 'src/app/models/enums/TypeTournoi';

@Component({
  selector: 'app-mtch',
  templateUrl: './mtch.component.html',
  styleUrls: ['./mtch.component.scss']
})
export class MtchComponent implements OnInit {

  dataSource$ = this.store.select(fromMatch.getMatchs);
  filteredMatches$!: Observable<any>;
  selectedType: string = '';
  selectedDate: string = ''

  constructor(private store: Store, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.store.dispatch(MatchActions.loadMatchs());
    this.filterMatchesByType('');
    this.filterMatchesByDate(this.selectedDate);

    this.filteredMatches$.subscribe(data => {
      console.log("Filtered Matches:", data);
    });
  }

  filterMatchesByType(type: string): void {
    console.log("Type choisi :", type);
    this.filteredMatches$ = this.dataSource$.pipe(
      map(matches => {
        if (!type || type === '') {
          return matches;
        } else {
          const typeTournoi = TypeTournoi[type as keyof typeof TypeTournoi];
          console.log(typeTournoi)
          if (typeTournoi !== undefined) {
            console.log("123", matches)
            return matches.filter(match => match.tournoi.type === typeTournoi);
          } else {
            console.error(`Invalid tournoi type: ${type}`);
            return [];
          }
        }
      })
    );
  }

  filterMatchesByDate(date: string): void {
    this.selectedDate = date;
    console.log("home:", this.selectedDate)
    this.filteredMatches$ = this.dataSource$.pipe(
      map(matches => {
        if (date === 'today') {
          return matches.filter(match => match.dateMatch === new Date().toISOString().split('T')[0]);
        } else if (date === '') {
          return matches;
        } else {
          return matches;
        }
      })
    );
  }


  onDateFilterChange(event: any): void {
    const selectedOption = event.target.value;
    console.log("Selected option:", selectedOption);

    if (selectedOption === 'today') {
      this.selectedDate = new Date().toISOString().split('T')[0];
    } else if (selectedOption === '') {
      this.filteredMatches$ = this.dataSource$;
    } else if (selectedOption === 'passed') {
      this.filteredMatches$ = this.dataSource$.pipe(
        map(matches => matches.filter(match => new Date(match.dateMatch) < new Date()))
      );
    } else if (selectedOption === 'upcoming') {
      this.filteredMatches$ = this.dataSource$.pipe(
        map(matches => matches.filter(match => new Date(match.dateMatch) > new Date()))
      );
    } else if (selectedOption === 'closed') {
      this.filteredMatches$ = this.dataSource$.pipe(
        map(matches => matches.filter(match => new Date(match.dateMatch) < new Date() && match.scoreEquipe1 !== null && match.scoreEquipe2 !== null))
      );
    } else {
      console.error(`Unknown option: ${selectedOption}`);
    }
  }


  isPlayerMatch(match: any): boolean {
    return match.player1 !== null && match.player2 !== null;
  }


}
