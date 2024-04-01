import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MatchService } from "src/app/services/match/match.service";
import * as MatchActions from '../../store/actions/match.actions';
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { Injectable } from "@angular/core";
import { SweetalertService } from "src/app/services/sweetAlert/sweet-alert.service";

@Injectable()
export class MatchEffects {
    loadMatchs$ = createEffect(() => this.actions$.pipe(
        ofType(MatchActions.loadMatchs),
        mergeMap(() => this.matchService.getMatchs()
            .pipe(
                map(matchs => MatchActions.loadMatchsSuccess({ matchs })),
                catchError((error) => {
                    console.error('Error fetching levels:', error);
                    return of(MatchActions.loadMatchsFailure({ error }));
                })
            ))
    ));

    addMatch$ = createEffect(() => this.actions$.pipe(
        ofType(MatchActions.addMatch),
        mergeMap(({ match }) => this.matchService.addMatch(match)
            .pipe(
                map(addedMAtchs => addedMAtchs[0]),
                map(addedMatch => MatchActions.addMatchSuccess({ addedMatch })),
                tap(() => this.sweetalertService.showSuccess('Equipe ajouté avec succès')),
                map(() => {
                    return MatchActions.loadMatchs()
                }),
                catchError(error => of(MatchActions.addMatchFailure({ error })))
            )
        )
    ));

    updateMatch$ = createEffect(() => this.actions$.pipe(
        ofType(MatchActions.updateMatch),
        mergeMap(({ match }) => this.matchService.updateMatch(match)
            .pipe(
                map(updatedMatchs => updatedMatchs[0]),
                map(updatedMatch => MatchActions.updateMatchSuccess({ updatedMatch })),
                catchError(error => of(MatchActions.updateMatchFailure({ error })))
            )
        )
    ));

    deleteMatch$ = createEffect(() => this.actions$.pipe(
        ofType(MatchActions.deleteMatch),
        mergeMap(({ matchId }) => this.matchService.deleteMatch(matchId)
            .pipe(
                map(() => MatchActions.deleteMatchSuccess({ deletedMatchId: matchId })),
                catchError(error => of(MatchActions.deleteMatchFailure({ error })))
            )
        )
    ));

    
    constructor(
        private actions$: Actions,
        private matchService: MatchService,
        private sweetalertService: SweetalertService
    ) { }

}