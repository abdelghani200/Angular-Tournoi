import { Component, OnInit } from '@angular/core';
import * as fromStats from '../../../store/selectors/statsEquipe.selectors';
import * as StatsActions from '../../../store/actions/statsEquipe.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  dataSource$ = this.store.select(fromStats.getStatsEquipes);
  sortData: any[] = [];
  uniqueTeams: any[] = [];
  selectedType: string = ''


  constructor(private store: Store) {

  }

  ngOnInit(): void {
    this.store.dispatch(StatsActions.loadStatsEquipe());

    this.dataSource$.subscribe(data => {
      console.log('Data:', data)
    })
    this.dataSource$.subscribe(data => {
      this.sortData = data.slice().sort((a, b) => b.points - a.points);
    })

    this.filterByType({ target: { value: 'FootBall' } } as any);
  }

  filterByType(event: Event): void {
    const type = (event.target as HTMLSelectElement).value;
    this.selectedType = type;
    this.dataSource$.subscribe(data => {
      if (typeof type === 'string') {
        if (type === '') {
          this.sortData = data.slice().sort((a, b) => b.points - a.points);
        } else {
          this.sortData = data.filter(item => item.type === type).slice().sort((a, b) => b.points - a.points);
        }
      }
    });
  }
  
  


}
