import { createAction, props } from '@ngrx/store';
import { PlayerToFifa } from 'src/app/models/PlayerToFifa';


export const addPlayerToFifa = createAction('[EquipeToTournoi] Add Equipe To Tournoi', props<{ playerToFifa: PlayerToFifa }>());

export const addPlayerToFifaFailure = createAction(
    '[playerToFifa] Add Player To Fifa Failure',
    props<{ error: string }>()
);

export const addPlayerToFifaSuccess = createAction(
    '[playerToFifa] Add Player To Fifa Success',
    props<{ playerToFifa: PlayerToFifa }>()
);
