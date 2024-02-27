import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PlayerState } from "../reducers/player.reducer";

const getPlayersState = createFeatureSelector<PlayerState>('players');

export const getPlayers = createSelector(getPlayersState, state => state.players);
export const getPlayersLoading = createSelector(getPlayersState, state => state.loading);
export const getPlayersError = createSelector(getPlayersState, state => state.error);
