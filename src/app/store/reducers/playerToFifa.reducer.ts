import { createReducer, on } from '@ngrx/store';
import * as PlayerToFifaActions from '../actions/playerToFifa.actions';
import { PlayerToEquipe } from 'src/app/models/PlayerToEquipe';

export interface PlayerToFifaState {
    PlayerToFifa: PlayerToEquipe[]
    loading: boolean;
    error: any;
}

export const initialState: PlayerToFifaState = {
    PlayerToFifa: [],
    loading: false,
    error: null,
};

export const PlayerToFifaReducer = createReducer(
    initialState,
    on(PlayerToFifaActions.addPlayerToFifa, (state, { playerToFifa }) =>
        ({ ...state, playerToEquipes: [...state.PlayerToFifa, playerToFifa] }))
);
