import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as StatsActions from '../../store/actions/statsEquipe.actions';
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { EquipeService } from "src/app/services/equipe/equipe.service";
import { Injectable } from "@angular/core";
import { SweetalertService } from "src/app/services/sweetAlert/sweet-alert.service";

@Injectable()
export class StatsEquipeEffects {

    loadMatchs$ = createEffect(() => this.actions$.pipe(
        ofType(StatsActions.loadStatsEquipe),
        mergeMap(() => this.equipeService.findAllWithMatchStats()
            .pipe(
                map(stats => StatsActions.loadStatsEquipesSuccess({ stats })),
                catchError((error) => {
                    console.error('Error fetching stats:', error);
                    return of(StatsActions.loadStatsEquipesFailure({ error }));
                })
            ))
    ));

    


    constructor(
        private actions$: Actions,
        private equipeService: EquipeService,
        private sweetalertService: SweetalertService
    ) { }

}