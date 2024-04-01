import { createReducer, on } from '@ngrx/store';
import * as MatchActions from '../actions/match.actions';
import { Match } from 'src/app/models/Match';

export interface MatchState {
    matchs: Match[];
    loading: boolean;
    error: any;
}

export const initialState: MatchState = {
    matchs: [],
    loading: false,
    error: null,
};

export const matchReducer = createReducer(
    initialState,
    on(MatchActions.loadMatchs, state => ({ ...state, loading: true, error: null })),
    on(MatchActions.loadMatchsSuccess, (state, { matchs }) => ({ ...state, matchs, loading: false })),
    on(MatchActions.loadMatchsFailure, (state, { error }) => ({ ...state, error, loading: false })),

    on(MatchActions.addMatch, state => ({ ...state, loading: true, error: null })),
    on(MatchActions.addMatchSuccess, (state, { addedMatch }) => ({
        ...state,
        matchs: [...state.matchs, addedMatch],
        loading: false
    })),
    on(MatchActions.addMatchFailure, (state, { error }) => ({ ...state, error, loading: false })),

    on(MatchActions.updateMatch, state => ({ ...state, loading: true, error: null })),
    on(MatchActions.updateMatchSuccess, (state, { updatedMatch }) => {
        const updatedMatchs = state.matchs.map(match => match.idMatch === updatedMatch.idMatch ? updatedMatch : match);
        return { ...state, matchs: updatedMatchs, loading: false };
    }),
    on(MatchActions.updateMatchFailure, (state, { error }) => ({ ...state, error, loading: false })),

    on(MatchActions.deleteMatch, state => ({ ...state, loading: true, error: null })),
    on(MatchActions.deleteMatchSuccess, (state, { deletedMatchId }) => ({
        ...state,
        matchs: state.matchs.filter(match => match.idMatch !== deletedMatchId),
        loading: false
    })),
    on(MatchActions.deleteMatchFailure, (state, { error }) => ({ ...state, error, loading: false })),

);
