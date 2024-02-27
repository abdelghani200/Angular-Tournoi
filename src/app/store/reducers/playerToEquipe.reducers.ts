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
    on(PlayerToEquipeActions.addPlayerToEquipe, (state, { playerToEquipe }) => ({ ...state, playerToEquipes: [...state.PlayerToEquipes, playerToEquipe] })),
);
