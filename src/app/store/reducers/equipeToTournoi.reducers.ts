import { createReducer, on } from '@ngrx/store';
import * as EquipeToTournoiActions from '../actions/equipeToTournoi.actions';
import { PlayerToEquipe } from 'src/app/models/PlayerToEquipe';

export interface EquipeToTournoiState {
    EquipeToTournois: PlayerToEquipe[]
    loading: boolean;
    error: any;
}

export const initialState: EquipeToTournoiState = {
    EquipeToTournois: [],
    loading: false,
    error: null,
};

export const equipeToTournoiReducer = createReducer(
    initialState,
    on(EquipeToTournoiActions.addEquipeToTournoi, (state, { equipeToTournoi }) => ({ ...state, equipeToTournois: [...state.EquipeToTournois, equipeToTournoi] })),
);
