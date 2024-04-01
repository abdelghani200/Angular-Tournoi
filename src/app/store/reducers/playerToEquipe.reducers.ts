import { createReducer, on } from '@ngrx/store';
import * as PlayerToEquipeActions from '../actions/playerToEquipe.actions';
import { PlayerToEquipe } from 'src/app/models/PlayerToEquipe';

export interface PlayerToEquipeState {
    PlayerToEquipes: PlayerToEquipe[]
    loading: boolean;
    error: any;
}

export const initialState: PlayerToEquipeState = {
    PlayerToEquipes: [],
    loading: false,
    error: null,
};

export const PlayerToEquipeReducer = createReducer(
    initialState,
    on(PlayerToEquipeActions.addPlayerToEquipe, (state, { playerToEquipe }) =>
        ({ ...state, playerToEquipes: [...state.PlayerToEquipes, playerToEquipe] })),

    on(PlayerToEquipeActions.addPlayerToEquipeFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),
    on(PlayerToEquipeActions.addPlayerToEquipeSuccess, (state, { playerToEquipe }) => ({
        ...state,
        loading: false,
        error: null
    })),
    on(PlayerToEquipeActions.getPlayersOfEquipe, (state) => ({
        ...state,
        loading: true,
        error: null
    })),
    on(PlayerToEquipeActions.getPlayersOfEquipeSuccess, (state, { playersofEquipe }) => ({
        ...state,
        id: playersofEquipe,
        loading: false,
        error: null
    })),
    on(PlayerToEquipeActions.getPlayersOfEquipeFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    }))
);
