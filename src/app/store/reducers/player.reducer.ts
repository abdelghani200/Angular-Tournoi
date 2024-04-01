import { createReducer, on } from '@ngrx/store';
import * as PlayersActions from '../actions/player.actions';
import { Player } from 'src/app/models/Player';
import { EquipeWithPlayer } from 'src/app/models/EquipeWithPlayer';

export interface PlayerState {
    players: Player[];
    loading: boolean;
    error: any;
}


export const initialState: PlayerState = {
    players: [],
    loading: false,
    error: null,
};

export const playerReducer = createReducer(
    initialState,
    on(PlayersActions.loadPlayers, state => ({ ...state, loading: true, error: null })),
    on(PlayersActions.loadPlayersSuccess, (state, { players }) => ({ ...state, players, loading: false })),
    on(PlayersActions.loadPlayersFailure, (state, { error }) => ({ ...state, error, loading: false })),

    on(PlayersActions.addPlayer, state => ({ ...state, loading: true, error: null })),
    on(PlayersActions.addPlayerSuccess, (state, { addedPlayer }) => ({
        ...state,
        players: [...state.players, addedPlayer],
        loading: false
    })),
    on(PlayersActions.addPlayerFailure, (state, { error }) => ({ ...state, error, loading: false })),

    on(PlayersActions.updatePlayer, state => ({ ...state, loading: true, error: null })),
    on(PlayersActions.updatePlayerSuccess, (state, { updatedPlayer }) => {
        const updatedPlayers = state.players.map(player => player.idUser === updatedPlayer.idUser ? updatedPlayer : player);
        return { ...state, players: updatedPlayers, loading: false };
    }),
    on(PlayersActions.updatePlayerFailure, (state, { error }) => ({ ...state, error, loading: false })),

    on(PlayersActions.deletePlayer, state => ({ ...state, loading: true, error: null })),
    on(PlayersActions.deletePlayerSuccess, (state, { deletedPlayerId }) => ({
        ...state,
        players: state.players.filter(player => player.idUser !== deletedPlayerId),
        loading: false
    })),
    on(PlayersActions.deletePlayerFailure, (state, { error }) => ({ ...state, error, loading: false })),

    on(PlayersActions.getPlayersOfTwoEquipes, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(PlayersActions.getPlayersOfEquipeSuccess, (state, { players }) => ({
        ...state,
        players: players,
        loading: false,
        error: null
    })),
    on(PlayersActions.getPlayersOfEquipeFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),


    

);
