import { createReducer, on } from '@ngrx/store';
import * as StatsActions from '../actions/statsEquipe.actions';
import { Stats } from 'src/app/models/Stats';

export interface StatsEquipeState {
    stats: Stats[];
    loading: boolean;
    error: any;
}

export const initialState: StatsEquipeState = {
    stats: [],
    loading: false,
    error: null,
};

export const equipeStatsReducer = createReducer(
    initialState,
    on(StatsActions.loadStatsEquipe, state => ({ ...state, loading: true, error: null })),
    on(StatsActions.loadStatsEquipesSuccess, (state, { stats }) => ({ ...state, stats, loading: false })),
    on(StatsActions.loadStatsEquipesFailure, (state, { error }) => ({ ...state, error, loading: false })),

);
