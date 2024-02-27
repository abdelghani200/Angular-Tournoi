import { createAction, props } from '@ngrx/store';
import { Tournoi } from 'src/app/models/Tournoi';

export const loadTournois = createAction('[Tournois] Load Tournois');
export const loadTournoisSuccess = createAction('[Tournois] Load Tournois Success', props<{ tournois: Tournoi[] }>());
export const loadTournoisFailure = createAction('[Tournois] Load Tournois Failure', props<{ error: any }>());

export const addTournoi = createAction('[Tournoi] Add Tournoi', props<{ tournoi: Tournoi }>());

export const updateTournoi = createAction('[Tournoi] Update Tournoi', props<{ tournoi: Tournoi }>());
export const updateTournoiSuccess = createAction('[Tournoi] Update Tournoi Success', props<{ updatedTournoi: Tournoi }>());
export const updateTournoiFailure = createAction('[Tournoi] Update Tournoi Failure', props<{ error: any }>());

export const deleteTournoi = createAction('[Tournoi] Delete Tournoi', props<{ tournoiId: number }>());
export const deleteTournoiSuccess = createAction('[Tournoi] Delete Tournoi Success', props<{ deletedTournoiId: number }>());
export const deleteTournoiFailure = createAction('[Tournoi] Delete Tournoi Failure', props<{ error: any }>());