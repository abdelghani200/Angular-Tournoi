import { createAction, props } from '@ngrx/store';


export const loadMatchesByTournoiId = createAction('[Match] Load Matches By Tournoi Id', props<{ tournoiId: number }>());
export const loadMatchesByTournoiIdSuccess = createAction('[Match] Load Matches By Tournoi Id Success', props<{ matchs: any }>());
export const loadMatchesByTournoiIdFailure = createAction('[Match] Load Matches By Tournoi Id Failure', props<{ error: any }>());