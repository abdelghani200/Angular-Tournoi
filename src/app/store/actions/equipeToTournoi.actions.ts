import { createAction, props } from '@ngrx/store';
import { EquipeToTournoi } from 'src/app/models/EquipeToTournoi';


export const addEquipeToTournoi = createAction(
    '[EquipeToTournoi] Add Equipe To Tournoi',
    props<{ equipeToTournoi: EquipeToTournoi }>()
);

export const addEquipeToTournoiFailure = createAction(
    '[EquipeToTournoi] Add Equipe To Tournoi Failure',
    props<{ error: string }>()
);

export const addEquipeToTournoiSuccess = createAction(
    '[EquipeToTournoi] Add Equipe To Tournoi Success',
    props<{ equipeToTournoi: EquipeToTournoi }>()
);
