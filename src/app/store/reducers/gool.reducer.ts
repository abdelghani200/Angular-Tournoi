import { createReducer, on } from '@ngrx/store';
import * as GoolActions from '../actions/gool.actions';
import { Gool } from 'src/app/models/Gool';

export interface GoolState {
    gools: Gool[];
    loading: boolean;
    error: any;
}

export const initialState: GoolState = {
    gools: [],
    loading: false,
    error: null,
};

export const goolReducer = createReducer(
    initialState,
    on(GoolActions.loadGools, state => ({ ...state, loading: true, error: null })),
    on(GoolActions.loadGoolSuccess, (state, { gools }) => ({ ...state, gools, loading: false })),
    on(GoolActions.loadGoolFailure, (state, { error }) => ({ ...state, error, loading: false })),
    on(GoolActions.incrementGoals, (state, { newNumberOfGoals }) => ({
        ...state,
        gools: state.gools.map(gool => ({
            ...gool,
            numberOfGoal: gool.numberOfGoal + newNumberOfGoals
        }))
    })),
    on(GoolActions.decrementGoals, (state, { newNumberOfGoals }) => ({
        ...state,
        gools: state.gools.map(gool => ({
            ...gool,
            numberOfGoal: gool.numberOfGoal - newNumberOfGoals
        }))
    })),
    on(GoolActions.searchGools, (state, { playerName, equipeName, tournoiName }) => {
        return state;
    }),
);
