import { Component, Inject, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromMaTourh from '../../../store/selectors/maTour.selectors';
import * as MatourActions from '../../../store/actions/maTour.actions';
import { MatchDto } from 'src/app/models/MatchDto';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-match',
  templateUrl: './list-match.component.html',
  styleUrls: ['./list-match.component.scss']
})
export class ListMatchComponent implements OnInit {

  dataSource$!: Observable<MatchDto[]>;

  constructor(private store: Store, @Inject(MAT_DIALOG_DATA) public data: any, private router: Router, private dialog: MatDialog) {

  }

  ngOnInit(): void {
    const tournoiId = this.data.tournoiId;
    console.log(this.data);
    this.store.dispatch(MatourActions.loadMatchesByTournoiId({ tournoiId }));

    this.dataSource$ = this.store.select(fromMaTourh.getMatchs);
    this.dataSource$.subscribe(matches => {
      console.log('Matches:', matches);
    });
  }



}
