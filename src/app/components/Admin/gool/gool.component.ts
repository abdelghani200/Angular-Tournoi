import { Component } from '@angular/core';
import * as GoolActions from '../../../store/actions/gool.actions';
import * as fromGool from '../../../store/selectors/gool.selectors';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { GoalFormComponent } from 'src/app/shared/form/goal-form/goal-form.component';


@Component({
  selector: 'app-gool',
  templateUrl: './gool.component.html',
  styleUrls: ['./gool.component.scss']
})
export class GoolComponent {

  dataSource$ = this.store.select(fromGool.getGools);
  showFifaGolas = false;

  displayedColumns: string[] = ['idBut', 'match', 'equipe', 'player', 'numberOfGoal', 'tournoi', 'actions'];

  searchTerm: string = '';

  constructor(private store: Store, private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.loadGools()
  }

  loadGools(): void {
    this.store.dispatch(GoolActions.loadGools());

    this.dataSource$ = this.store.select(fromGool.getGools)
      .pipe(
        map(goals => goals.filter(goal => goal.match.tournoi.type !== 'Fifa'))
      );

    this.dataSource$.subscribe(data =>{
      console.log(data)
    })
  }


  incrementGoals(id: number, newNumberOfGoals: number): void {
    console.log(newNumberOfGoals)
    this.store.dispatch(GoolActions.incrementGoals({ id, newNumberOfGoals }));
  }

  decrementGoals(id: number, newNumberOfGoals: number): void {
    console.log(newNumberOfGoals)
    this.store.dispatch(GoolActions.decrementGoals({ id, newNumberOfGoals }));
  }

  openGoalFormDialog(){
    const dialogRef = this.dialog.open(GoalFormComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  search(): void {
    if (this.searchTerm) {
        const [playerName, equipeName, tournoiName] = this.searchTerm.split(',');
        if (playerName || equipeName || tournoiName) {
            this.dataSource$ = this.store.select(fromGool.getGools).pipe(
                map((gools: any[]) => {
                    return gools.filter(gool => {
                        let matchPlayer = true;
                        let matchEquipe = true;
                        let matchTournoi = true;

                        if (playerName) {
                            matchPlayer = gool.player.nomUser.toLowerCase().includes(playerName.trim().toLowerCase());
                        }
                        if (equipeName) {
                            matchEquipe = gool.equipe.nomEquipe.toLowerCase().includes(equipeName.trim().toLowerCase());
                        }
                        if (tournoiName) {
                            matchTournoi = gool.match.tournoi.nameTournoi.toLowerCase().includes(tournoiName.trim().toLowerCase());
                        }

                        return matchPlayer && matchEquipe && matchTournoi;
                    });
                })
            );
        } else {
            this.store.dispatch(GoolActions.loadGools());
        }
    } else{
      this.dataSource$ = this.store.select(fromGool.getGools);
    }
}


toggleFifaGoals() {
  this.showFifaGolas = !this.showFifaGolas;
  if (this.showFifaGolas) {
    this.dataSource$ = this.store.select(fromGool.getGools)
      .pipe(
        map(goals => goals.filter(goal => goal.match.tournoi.type === 'Fifa'))
      );
    this.displayedColumns = ['idBut', 'match', 'player', 'numberOfGoal', 'actions'];
  } else {
    this.loadGools();
  }
}




}
