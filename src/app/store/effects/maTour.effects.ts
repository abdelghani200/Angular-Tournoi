import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MatchService } from "src/app/services/match/match.service";
import * as MaTourActions from '../../store/actions/maTour.actions';
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class MatchDtoEffects {
    loadMatchesByTournoiId$ = createEffect(() => this.actions$.pipe(
        ofType(MaTourActions.loadMatchesByTournoiId),
        mergeMap(({ tournoiId }) => this.matchService.getMatchesByTournoiId(tournoiId)
            .pipe(
                tap(matchs => console.log('Matchs retournés par le service:', matchs)),
                map(matchs => MaTourActions.loadMatchesByTournoiIdSuccess({ matchs })),
                catchError(error => of(MaTourActions.loadMatchesByTournoiIdFailure({ error })))
            ))
    ));


    constructor(
        private actions$: Actions,
        private matchService: MatchService
    ) { }

}