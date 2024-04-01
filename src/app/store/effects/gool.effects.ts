import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as GoolActions from '../../store/actions/gool.actions';
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { Injectable } from "@angular/core";
import { GoolService } from "src/app/services/gools/gool.service";
import { SweetalertService } from "src/app/services/sweetAlert/sweet-alert.service";

@Injectable()
export class GoolEffects {
    loadMatchs$ = createEffect(() => this.actions$.pipe(
        ofType(GoolActions.loadGools),
        mergeMap(() => this.goolService.getGools()
            .pipe(
                map(gools => GoolActions.loadGoolSuccess({ gools })),
                catchError((error) => {
                    console.error('Error fetching equipes:', error);
                    return of(GoolActions.loadGoolFailure({ error }));
                })
            ))
    ));

    incrementGoals$ = createEffect(() => this.actions$.pipe(
        ofType(GoolActions.incrementGoals),
        mergeMap(({ id, newNumberOfGoals }) => this.goolService.incrementGoals(id, newNumberOfGoals)
            .pipe(
                map(() => GoolActions.loadGools()),
                catchError(error => of(GoolActions.loadGoolFailure({ error })))
            )
        )
    ));

    decrementGoals$ = createEffect(() => this.actions$.pipe(
        ofType(GoolActions.decrementGoals),
        mergeMap(({ id, newNumberOfGoals }) => this.goolService.decrementGoals(id, newNumberOfGoals)
            .pipe(
                map(() => GoolActions.loadGools()),
                catchError(error => of(GoolActions.loadGoolFailure({ error })))
            )
        )
    ));

    searchGools$ = createEffect(() => this.actions$.pipe(
        ofType(GoolActions.searchGools),
        mergeMap(({ playerName, equipeName, tournoiName }) =>
            this.goolService.searchGools(playerName, equipeName, tournoiName)
                .pipe(
                    map(gools => (GoolActions.searchGoolsSuccess({ gools }))),
                    catchError(error => of(GoolActions.searchGoolsFailure({ error })))
                )
        )
    ));

    addGoal$ = createEffect(() => this.actions$.pipe(
        ofType(GoolActions.addGoal),
        mergeMap((action) => {
            return this.goolService.addGool(action.goal).pipe(
                tap(() => this.sweetalertService.showSuccess('Goal ajouté avec succès')),
                map(() => {
                    return GoolActions.loadGools()
                }),
                catchError((error) => {
                    this.sweetalertService.showError('Erreur lors de l\'ajout du goal');
                    return of(GoolActions.loadGoolFailure({ error }));
                })
            )
        })
    ))


    constructor(
        private actions$: Actions,
        private goolService: GoolService,
        private sweetalertService: SweetalertService
    ) { }

}