import { createAction, props } from '@ngrx/store';
import { Commentaire } from 'src/app/models/Commentaire';

export const loadCommentaires = createAction('[Commentaire] Load Equipes');
export const loadCommentairesSuccess = createAction('[Commentaire] Load Commentaires Success', props<{ commentaires: Commentaire[] }>());
export const loadCommentairesFailure = createAction('[Commentaire] Load Commentaires Failure', props<{ error: any }>());

export const updateCommentaire = createAction('[Commentaire] Update Commentaire', props<{ commentaire: Commentaire }>());
export const updateCommentaireSuccess = createAction('[Commentaire] Update Commentaire Success', props<{ updatedCommentaire: Commentaire }>());
export const updateCommentaireFailure = createAction('[Commentaire] Update Commentaire Failure', props<{ error: any }>());

export const deleteCommentaire= createAction('[Commentaire] Delete Commentaire', props<{ commentaireId: number }>());
export const deleteCommentaireSuccess = createAction('[Commentaire] Delete Commentaire Success', props<{ deletedCommentaireId: number }>());
export const deleteCommentaireFailure = createAction('[Commentaire] Delete Commentaire Failure', props<{ error: any }>());

export const addCommentaire = createAction('[Commentaire] Add Commentaire', props<{ matchId: number, contenu: any, user: any}>());
export const addCommentaireSuccess = createAction('[Commentaire] Add Commentaire Success', props<{ commentaire: Commentaire }>());
export const addCommentaireFailure = createAction('[Commentaire] Add Commentaire Failure', props<{ error: any }>());