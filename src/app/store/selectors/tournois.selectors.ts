import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TournoisState } from '../reducers/tournois.reducer';

const getTournoisState = createFeatureSelector<TournoisState>('tournois');

export const getTournois = createSelector(getTournoisState, state => state.tournois);
export const getTournoisLoading = createSelector(getTournoisState, state => state.loading);
export const getTournoisError = createSelector(getTournoisState, state => state.error);
