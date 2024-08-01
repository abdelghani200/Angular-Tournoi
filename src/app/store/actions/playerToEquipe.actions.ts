import { createAction, props } from '@ngrx/store';
import { PlayerEquipe } from 'src/app/models/PlayerEquipe';
import { PlayerToEquipe } from 'src/app/models/PlayerToEquipe';


export const addPlayerToEquipe = createAction(
    '[PlayerToEquipe] Add Player To Equipe',
    props<{ playerToEquipe: PlayerToEquipe[] }>()
);

export const addPlayerToEquipeFailure = createAction(
    '[PlayerToEquipe] Add Player To Equipe Failure',
    props<{ error: string }>()
);

export const addPlayerToEquipeSuccess = createAction(
    '[PlayerToEquipe] Add Player To Equipe Success',
    props<{ playerToEquipe: PlayerToEquipe[] }>()
);

export const getPlayersOfEquipe = createAction(
    'Player of Equipe',
    props<{ id: number }>()
)
export const getPlayersOfEquipeSuccess = createAction('Player of Equipe Success', props<{ playersofEquipe: PlayerEquipe[]}>());
export const getPlayersOfEquipeFailure = createAction('Player of Equipes Failure', props<{ error: any }>());

