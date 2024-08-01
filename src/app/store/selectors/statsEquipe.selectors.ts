import { createFeatureSelector, createSelector } from "@ngrx/store";
import { StatsEquipeState } from "../reducers/statsEquipe.reducer";

const getStatsEquipesState = createFeatureSelector<StatsEquipeState>('stats');

export const getStatsEquipes = createSelector(getStatsEquipesState, state => state.stats);
export const getStatsEquipesLoading = createSelector(getStatsEquipesState, state => state.loading);
export const getStatsEquipesError = createSelector(getStatsEquipesState, state => state.error);
