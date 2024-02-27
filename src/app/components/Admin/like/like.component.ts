import { Component } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent {

  dataSource = [
    { id: 1, name: 'Match 1', equipe: 'Team A', startDate: new Date(), endDate: new Date() },
    { id: 2, name: 'Match 2', equipe: 'Team B', startDate: new Date(), endDate: new Date() },
  ];

  displayedColumns: string[] = ['id', 'name', 'equipe', 'startDate', 'endDate'];


}
