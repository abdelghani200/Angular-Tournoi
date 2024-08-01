import { createFeatureSelector, createSelector } from "@ngrx/store";
import { GoolState } from "../reducers/gool.reducer";

const getGoolState = createFeatureSelector<GoolState>('gools');

export const getGools = createSelector(getGoolState, state => state.gools);
export const getGoolsLoading = createSelector(getGoolState, state => state.loading);
export const getGoolsError = createSelector(getGoolState, state => state.error);
