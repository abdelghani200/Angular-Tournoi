import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as PlayerToFifaActions from '../actions/playerToFifa.actions';
import { SweetalertService } from 'src/app/services/sweetAlert/sweet-alert.service';
import { PlayerToFifaService } from 'src/app/services/playerToFifa/player-to-fifa.service';

@Injectable()
export class PlayerToFifaEffects {

    addPlayerToFifa$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PlayerToFifaActions.addPlayerToFifa),
            mergeMap(action =>
                this.playerToFifaService.PlayerToFifa(action.playerToFifa).pipe(
                    map(() => PlayerToFifaActions.addPlayerToFifaSuccess({ playerToFifa: action.playerToFifa })),
                    tap(() => this.sweetalertService.showSuccess('Player ajouté avec succès à tournoi ')),
                    catchError(error => of(PlayerToFifaActions.addPlayerToFifaFailure({ error })))
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private playerToFifaService: PlayerToFifaService,
        private sweetalertService: SweetalertService
    ) { }
}
