import { createAction, props } from '@ngrx/store';
import { Player } from 'src/app/models/Player';

export const loadPlayers = createAction('[Player] Load Players');
export const loadPlayersSuccess = createAction('[Player] Load Players Success', props<{ players: Player[] }>());
export const loadPlayersFailure = createAction('[Player] Load Players Failure', props<{ error: any }>());

export const addPlayer = createAction('[Player] Add Player', props<{ player: Player }>());
export const addPlayerSuccess = createAction('[Player] Add Player Success', props<{ addedPlayer: Player }>());
export const addPlayerFailure = createAction('[Player] Add Player Failure', props<{ error: any }>());


export const updatePlayer = createAction('[Player] Update Player', props<{ player: Player }>());
export const updatePlayerSuccess = createAction('[Player] Update Player Success', props<{ updatedPlayer: Player }>());
export const updatePlayerFailure = createAction('[Player] Update Player Failure', props<{ error: any }>());

export const deletePlayer = createAction('[Player] Delete Player', props<{ playerId: number }>());
export const deletePlayerSuccess = createAction('[Player] Delete Player Success', props<{ deletedPlayerId: number }>());
export const deletePlayerFailure = createAction('[Player] Delete Player Failure', props<{ error: any }>());
