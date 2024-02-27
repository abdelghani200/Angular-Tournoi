import { Component } from '@angular/core';
import * as GoolActions from '../../../store/actions/gool.actions';
import * as fromGool from '../../../store/selectors/gool.selectors';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-gool',
  templateUrl: './gool.component.html',
  styleUrls: ['./gool.component.scss']
})
export class GoolComponent {

  dataSource$ = this.store.select(fromGool.getGools);

  displayedColumns: string[] = ['idBut', 'match', 'equipe', 'player', 'numberOfGoal', 'tournoi', 'actions'];

  searchTerm: string = '';
  private subscription!: Subscription;

  constructor(private store: Store) {

  }

  ngOnInit(): void {
    this.loadGools()
  }

  loadGools(): void {
    this.store.dispatch(GoolActions.loadGools());
  }


  incrementGoals(id: number, newNumberOfGoals: number): void {
    console.log(newNumberOfGoals)
    this.store.dispatch(GoolActions.incrementGoals({ id, newNumberOfGoals }));
  }

  decrementGoals(id: number, newNumberOfGoals: number): void {
    console.log(newNumberOfGoals)
    this.store.dispatch(GoolActions.decrementGoals({ id, newNumberOfGoals }));
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




}
