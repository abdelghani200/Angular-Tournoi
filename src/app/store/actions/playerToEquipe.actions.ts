import { createAction, props } from '@ngrx/store';
import { PlayerToEquipe } from 'src/app/models/PlayerToEquipe';


export const addPlayerToEquipe = createAction(
    '[PlayerToEquipe] Add Player To Equipe',
    props<{ playerToEquipe: PlayerToEquipe }>()
);

export const addPlayerToEquipeFailure = createAction(
    '[PlayerToEquipe] Add Player To Equipe Failure',
    props<{ error: string }>()
);

export const addPlayerToEquipeSuccess = createAction(
    '[PlayerToEquipe] Add Player To Equipe Success',
    props<{ playerToEquipe: PlayerToEquipe }>()
);
