import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as PlayerToEquipeActions from '../actions/playerToEquipe.actions';
import { PlayerToEquipeService } from 'src/app/services/PlayerToEquipe/player-to-equipe.service';
import { SweetalertService } from 'src/app/services/sweetAlert/sweet-alert.service';

@Injectable()
export class PlayerToEquipeEffects {

    addPlayerToEquipe$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PlayerToEquipeActions.addPlayerToEquipe),
            mergeMap(action =>
                this.playerToEquipeService.PlayerToEquipe(action.playerToEquipe).pipe(
                    map(() => PlayerToEquipeActions.addPlayerToEquipeSuccess({ playerToEquipe: action.playerToEquipe })),
                    tap(() => this.sweetalertService.showSuccess('Players ajouté avec succès')),
                    catchError(error => of(PlayerToEquipeActions.addPlayerToEquipeFailure({ error })))
                )
            )
        )
    );

    getPlayersOfEquipe$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PlayerToEquipeActions.getPlayersOfEquipe),
            mergeMap((action) =>
                this.playerToEquipeService.getPlayersOEquipe(action.id).pipe(
                    map((playersofEquipe) => PlayerToEquipeActions.getPlayersOfEquipeSuccess({ playersofEquipe })),
                    catchError(error => of(PlayerToEquipeActions.getPlayersOfEquipeFailure({ error })))
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private playerToEquipeService: PlayerToEquipeService,
        private sweetalertService: SweetalertService
    ) { }
}
