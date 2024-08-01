import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StatisticsState } from '../reducers/statistiques.reducer';

export const selectStatisticsState = createFeatureSelector<StatisticsState>('statistics');

export const selectStatistics = createSelector(
    selectStatisticsState,
    state => state.statistics
);

export const selectStatisticsLoading = createSelector(
    selectStatisticsState,
    state => state.loading
);

export const selectStatisticsError = createSelector(
    selectStatisticsState,
    state => state.error
);
