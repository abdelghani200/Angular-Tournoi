import { createAction, props } from '@ngrx/store';
import { Equipe } from 'src/app/models/Equipe';

export const loadEquipes = createAction('[Equipe] Load Equipes');
export const loadEquipesSuccess = createAction('[Equipe] Load Equipes Success', props<{ equipes: Equipe[] }>());
export const loadEquipesFailure = createAction('[Equipe] Load Equipes Failure', props<{ error: any }>());

export const addEquipe = createAction('[Equipe] Add Equipe', props<{ equipe: Equipe }>());
export const addEquipeSuccess = createAction('[Equipe] Add Equipe Success', props<{ addedEquipe: Equipe }>());
export const addEquipeFailure = createAction('[Equipe] Add Equipe Failure', props<{ error: any }>());

export const updateEquipe = createAction('[Equipe] Update Equipe', props<{ equipe: Equipe }>());
export const updateEquipeSuccess = createAction('[Equipe] Update Equipe Success', props<{ updatedEquipe: Equipe }>());
export const updateEquipeFailure = createAction('[Equipe] Update Equipe Failure', props<{ error: any }>());

export const deleteEquipe = createAction('[Equipe] Delete Equipe', props<{ equipeId: number }>());
export const deleteEquipeSuccess = createAction('[Equipe] Delete Equipe Success', props<{ deletedEquipeId: number }>());
export const deleteEquipeFailure = createAction('[Equipe] Delete Equipe Failure', props<{ error: any }>());
