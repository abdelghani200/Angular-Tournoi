import { createReducer, on } from '@ngrx/store';
import * as TournoisActions from '../actions/tournois.actions';
import { Tournoi } from 'src/app/models/Tournoi';

export interface TournoisState {
    tournois: Tournoi[];
    loading: boolean;
    error: any;
}

export const initialState: TournoisState = {
    tournois: [],
    loading: false,
    error: null,
};

export const tournoisReducer = createReducer(
    initialState,
    on(TournoisActions.loadTournois, state => ({ ...state, loading: true, error: null })),
    on(TournoisActions.loadTournoisSuccess, (state, { tournois }) => ({ ...state, tournois, loading: false })),
    on(TournoisActions.loadTournoisFailure, (state, { error }) => ({ ...state, error, loading: false })),
    on(TournoisActions.addTournoi, (state, { tournoi }) => ({ ...state, tournois: [...state.tournois, tournoi] })),

    on(TournoisActions.updateTournoi, (state, { tournoi }) => ({
        ...state,
        tournois: state.tournois.map((t) => (t.id === tournoi.id ? tournoi : t)),
    })),
    on(TournoisActions.deleteTournoi, (state, { tournoiId }) => ({
        ...state,
        tournois: state.tournois.filter((t) => t.id !== tournoiId),
    })),

);
