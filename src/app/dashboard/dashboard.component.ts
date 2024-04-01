import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as FromStatics from '../store/selectors/statistiques.selectors';
import * as StaticsActions from '../store/actions/statistiques.actions';
import * as GoolActions from '../store/actions/gool.actions';
import * as fromGool from '../store/selectors/gool.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  totalEquipes!: number;
  totalMatches!: number;
  totalTournois!: number;
  totalPlayers!: number;

  goals$ = this.store.select(fromGool.getGools);
  dataSource$ = this.store.select(FromStatics.selectStatistics)

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(StaticsActions.loadStatistics())
    this.store.dispatch(GoolActions.loadGools())

    this.goals$.subscribe(goals =>{
      console.log("goals:", goals);
    })

    this.dataSource$.subscribe(data => {
      this.totalEquipes = data.totalEquipes;
      this.totalMatches = data.totalMatches;
      this.totalTournois = data.totalTournois;
      this.totalPlayers = data.totalPlayers
    })
  }

}
