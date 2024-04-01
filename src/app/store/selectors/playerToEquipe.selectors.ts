import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MatchState } from "../reducers/match.reducer";
import { PlayerState } from "../reducers/player.reducer";

const getMatchsState = createFeatureSelector<MatchState>('matchs');

const getPlayerEquipeState = createFeatureSelector<PlayerState>('players');



export const getMatchs = createSelector(getMatchsState, state => state.matchs);
export const getMatchsLoading = createSelector(getMatchsState, state => state.loading);
export const getMatchsError = createSelector(getMatchsState, state => state.error);


export const getPlayerEquipe = createSelector(getPlayerEquipeState, state => state.players);
export const getPlayerEquipeLoading = createSelector(getPlayerEquipeState, state => state.loading);
export const getPlayerEquipeError = createSelector(getPlayerEquipeState, state => state.error);



export const getMatchById = (id: number) => createSelector(
    getMatchs,
    matchs => matchs.find(match => match.idMatch === id)
);

