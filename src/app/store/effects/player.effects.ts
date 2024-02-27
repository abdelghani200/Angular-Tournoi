import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as PlayersActions from '../../store/actions/player.actions';
import { catchError, map, mergeMap, of } from "rxjs";
import { Injectable } from "@angular/core";
import { PlayerService } from "src/app/services/player/player.service";

@Injectable()
export class PlayerEffects {
    loadPlayers$ = createEffect(()=> this.actions$.pipe(
        ofType(PlayersActions.loadPlayers),
        mergeMap(() => this.playerService.getPlayers()
        .pipe(
            map(players => PlayersActions.loadPlayersSuccess({ players })),
            catchError((error) => {
                console.error('Error fetching equipes:', error);
                return of(PlayersActions.loadPlayersFailure({ error }));
            })
        ))
    ));

    addPlayer$ = createEffect(() => this.actions$.pipe(
        ofType(PlayersActions.addPlayer),
        mergeMap(({ player }) => this.playerService.addPlayer(player)
            .pipe(
                map(addedPlayers => addedPlayers[0]),
                map(addedPlayer => PlayersActions.addPlayerSuccess({ addedPlayer })),
                catchError(error => of(PlayersActions.addPlayerFailure({ error })))
            )
        )
    ));

    updatePlayer$ = createEffect(() => this.actions$.pipe(
        ofType(PlayersActions.updatePlayer),
        mergeMap(({ player }) => this.playerService.updatePlayer(player)
            .pipe(
                map(updatedPlayers => updatedPlayers[0]),
                map(updatedPlayer => PlayersActions.updatePlayerSuccess({ updatedPlayer })),
                catchError(error => of(PlayersActions.updatePlayerFailure({ error })))
            )
        )
    ));

    deletePlayer$ = createEffect(() => this.actions$.pipe(
        ofType(PlayersActions.deletePlayer),
        mergeMap(({ playerId }) => this.playerService.deletePlayer(playerId)
            .pipe(
                map(() => PlayersActions.deletePlayerSuccess({ deletedPlayerId: playerId })),
                catchError(error => of(PlayersActions.deletePlayerFailure({ error })))
            )
        )
    ));


    constructor(
        private actions$: Actions,
        private playerService: PlayerService
    ){}

}