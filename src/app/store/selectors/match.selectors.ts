import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MatchState } from "../reducers/match.reducer";

const getMatchsState = createFeatureSelector<MatchState>('matchs');

export const getMatchs = createSelector(getMatchsState, state => state.matchs);
export const getMatchsLoading = createSelector(getMatchsState, state => state.loading);
export const getMatchsError = createSelector(getMatchsState, state => state.error);
