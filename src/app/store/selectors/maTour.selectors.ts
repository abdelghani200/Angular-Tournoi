import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MatchDtoState } from "../reducers/matchDto.reducer";


const getMaTourState = createFeatureSelector<MatchDtoState>('matours');


export const getMatchs = createSelector(getMaTourState, state => state.matchs);
export const getMatchsLoading = createSelector(getMaTourState, state => state.loading);
export const getMatchsError = createSelector(getMaTourState, state => state.error);
;