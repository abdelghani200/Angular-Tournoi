import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as PlayerToEquipeActions from '../actions/playerToEquipe.actions';
import { PlayerToEquipeService } from 'src/app/services/PlayerToEquipe/player-to-equipe.service';

@Injectable()
export class PlayerToEquipeEffects {

    addPlayerToEquipe$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PlayerToEquipeActions.addPlayerToEquipe),
            mergeMap(action =>
                this.playerToEquipeService.PlayerToEquipe(action.playerToEquipe).pipe(
                    map(() => PlayerToEquipeActions.addPlayerToEquipeSuccess({ playerToEquipe: action.playerToEquipe })),
                    catchError(error => of(PlayerToEquipeActions.addPlayerToEquipeFailure({ error })))
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private playerToEquipeService: PlayerToEquipeService
    ) { }
}
