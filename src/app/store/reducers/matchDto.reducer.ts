import { createReducer, on } from '@ngrx/store';
import * as MaTourActions from '../actions/maTour.actions';
import { MatchDto } from 'src/app/models/MatchDto';

export interface MatchDtoState {
    matchs: MatchDto[];
    loading: boolean;
    error: any;
}

export const initialState: MatchDtoState = {
    matchs: [],
    loading: false,
    error: null,
};

export const matchDtoReducer = createReducer(
    initialState,

    on(MaTourActions.loadMatchesByTournoiId, state => ({ ...state, loading: true, error: null })),
    on(MaTourActions.loadMatchesByTournoiIdSuccess, (state, { matchs }) => ({
        ...state,
        matchs: matchs,
        loading: false
    })),
    on(MaTourActions.loadMatchesByTournoiIdFailure, (state, { error }) => ({ ...state, error, loading: false })),


);
