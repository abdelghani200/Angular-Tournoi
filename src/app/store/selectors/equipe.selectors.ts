import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EquipeState } from "../reducers/equipe.reducer";

const getEquipesState = createFeatureSelector<EquipeState>('equipes');

export const getEquipes = createSelector(getEquipesState, state => state.equipes);
export const getEquipesLoading = createSelector(getEquipesState, state => state.loading);
export const getEquipesError = createSelector(getEquipesState, state => state.error);


export const getSelectedEquipe = createSelector(
    getEquipesState,
    (state: EquipeState, props: { equipeId: number }) => state.equipes.find(equipe => equipe.idEquipe === props.equipeId)
);