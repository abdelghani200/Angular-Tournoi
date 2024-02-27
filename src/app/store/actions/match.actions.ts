import { createAction, props } from '@ngrx/store';
import { Match } from 'src/app/models/Match';

export const loadMatchs = createAction('[Match] Load Matchs');
export const loadMatchsSuccess = createAction('[Match] Load Matchs Success', props<{ matchs: Match[] }>());
export const loadMatchsFailure = createAction('[Match] Load Matchs Failure', props<{ error: any }>());

export const addMatch = createAction('[Match] Add Match', props<{ match: Match }>());
export const addMatchSuccess = createAction('[Match] Add Match Success', props<{ addedMatch: Match }>());
export const addMatchFailure = createAction('[Match] Add Match Failure', props<{ error: any }>());

export const updateMatch = createAction('[Match] Update Match', props<{ match: Match }>());
export const updateMatchSuccess = createAction('[Match] Update Match Success', props<{ updatedMatch: Match }>());
export const updateMatchFailure = createAction('[Match] Update Match Failure', props<{ error: any }>());

export const deleteMatch = createAction('[Match] Delete Match', props<{ matchId: number }>());
export const deleteMatchSuccess = createAction('[Match] Delete Match Success', props<{ deletedMatchId: number }>());
export const deleteMatchFailure = createAction('[Match] Delete Match Failure', props<{ error: any }>());
