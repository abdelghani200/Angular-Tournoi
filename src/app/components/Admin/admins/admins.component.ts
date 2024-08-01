import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as FromAdmin from '../../../store/selectors/admin.selectors';
import * as AdminsActions from '../../../store/actions/admin.actions';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements OnInit{

  dataSource$ = this.store.select(FromAdmin.getAdmins)

  displayedColumns: string[] = ['idUser', 'nomUser', 'prenomUser', 'adress', 'email', 'role', 'phone', 'actions']

  constructor(private store: Store){

  }

  ngOnInit(): void {
    this.store.dispatch(AdminsActions.loadAdmins());
  }

}
