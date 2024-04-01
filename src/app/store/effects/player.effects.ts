import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as PlayersActions from '../../store/actions/player.actions';
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { Injectable } from "@angular/core";
import { PlayerService } from "src/app/services/player/player.service";
import { SweetalertService } from "src/app/services/sweetAlert/sweet-alert.service";

@Injectable()
export class PlayerEffects {
    loadPlayers$ = createEffect(() => this.actions$.pipe(
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
                tap(() => this.sweetalertService.showSuccess('Joueur ajouté avec succès')),
                map(addedPlayer => PlayersActions.addPlayerSuccess({ addedPlayer })),
                catchError((error) => {
                    this.sweetalertService.showError('Erreur lors de l\'ajout du joueur');
                    return of(PlayersActions.loadPlayersFailure({ error }));
                })
            )
        )
    ));

    updatePlayer$ = createEffect(() => this.actions$.pipe(
        ofType(PlayersActions.updatePlayer),
        mergeMap(({ player }) => this.playerService.updatePlayer(player)
            .pipe(
                map(updatedPlayers => updatedPlayers[0]),
                tap(() => this.sweetalertService.showSuccess('Joueur mis à jour avec succès')),
                map(updatedPlayer => PlayersActions.updatePlayerSuccess({ updatedPlayer })),
                catchError((error) => {
                    this.sweetalertService.showError('Erreur lors de la mise à jour du joueur');
                    return of(PlayersActions.loadPlayersFailure({ error }));
                })
            )
        )
    ));

    deletePlayer$ = createEffect(() => this.actions$.pipe(
        ofType(PlayersActions.deletePlayer),
        mergeMap(({ playerId }) => this.playerService.deletePlayer(playerId)
            .pipe(
                tap(() => this.sweetalertService.showSuccess('Joueur supprimé avec succès')),
                map(() => PlayersActions.deletePlayerSuccess({ deletedPlayerId: playerId })),
                catchError((error) => {
                    this.sweetalertService.showError('Erreur lors de la suppression du joueur');
                    return of(PlayersActions.loadPlayersFailure({ error }));
                })
            )
        )
    ));


    getPlayersOfTwoEquipes$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PlayersActions.getPlayersOfTwoEquipes),
            mergeMap(action =>
                this.playerService.getPlayersByEquipe(action.equipeId1, action.equipeId2).pipe(
                    tap(players => console.log('Players of Two Equipes:', players)),
                    map(players => PlayersActions.getPlayersOfEquipeSuccess({ players })),
                    catchError(error => of(PlayersActions.getPlayersOfEquipeFailure({ error })))
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private playerService: PlayerService,
        private sweetalertService: SweetalertService
    ) { }

}