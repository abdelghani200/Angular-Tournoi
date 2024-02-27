import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as TournoisActions from '../actions/tournois.actions';
import { TournoiService } from 'src/app/services/tournoi/tournoi.service';

@Injectable()
export class TournoisEffects {

    loadTournois$ = createEffect(() => this.actions$.pipe(
        ofType(TournoisActions.loadTournois),
        mergeMap(() => this.tournoiService.getTournois()
            .pipe(
                map(tournois => TournoisActions.loadTournoisSuccess({ tournois })),
                catchError(error => EMPTY)
            ))
    ));

    addTournoi$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(TournoisActions.addTournoi),
            mergeMap((action) => {
                return this.tournoiService.addTournoi(action.tournoi).pipe(
                    map(() => {
                        return TournoisActions.loadTournois()
                    }),
                    catchError((error) => {
                        return of(TournoisActions.loadTournoisFailure({ error }));
                    })
                );
            })
        );
    });

    updateTournoi$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(TournoisActions.updateTournoi),
            mergeMap((action) =>
                this.tournoiService.updateTournoi(action.tournoi).pipe(
                    map(() => TournoisActions.loadTournois()),
                    catchError((error) => of(TournoisActions.loadTournoisFailure({ error })))
                )
            )
        );
    });

    deleteTournoi$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(TournoisActions.deleteTournoi),
            mergeMap((action) =>
                this.tournoiService.deleteTournoi(action.tournoiId).pipe(
                    map(() => TournoisActions.loadTournois()),
                    catchError((error) => of(TournoisActions.loadTournoisFailure({ error })))
                )
            )
        );
    });

    constructor(
        private actions$: Actions,
        private tournoiService: TournoiService
    ) { }
}
