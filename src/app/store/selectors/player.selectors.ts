import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PlayerState } from "../reducers/player.reducer";
import { Player } from "src/app/models/Player";
import { EquipeWithPlayer } from "src/app/models/EquipeWithPlayer";

const getPlayersState = createFeatureSelector<PlayerState>('players');

export const getPlayers = createSelector(getPlayersState, state => state.players);
export const getPlayersLoading = createSelector(getPlayersState, state => state.loading);
export const getPlayersError = createSelector(getPlayersState, state => state.error);


export const getAllPlayers = createSelector(getPlayersState, state => state.players);



export const getPlayersOfTwoEquipes = createSelector(
    getAllPlayers,
    (players: Player[]) => players
);
