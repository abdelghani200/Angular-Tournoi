import { createReducer, on } from '@ngrx/store';
import * as statisticsActions from '../actions/statistiques.actions';

export interface StatisticsState {
    statistics: any; // Remplacez 'any' par le type approprié pour vos statistiques
    loading: boolean;
    error: any;
}

export const initialState: StatisticsState = {
    statistics: null,
    loading: false,
    error: null
};

export const statisticsReducer = createReducer(
    initialState,

    on(statisticsActions.loadStatistics, state => ({
        ...state,
        loading: true,
        error: null
    })),

    on(statisticsActions.statisticsLoaded, (state, { statistics }) => ({
        ...state,
        statistics,
        loading: false,
        error: null
    })),

    on(statisticsActions.statisticsLoadFailed, (state, { error }) => ({
        ...state,
        loading: false,
        error
    }))
);
