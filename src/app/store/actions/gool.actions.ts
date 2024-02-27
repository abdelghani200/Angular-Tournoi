import { createAction, props } from '@ngrx/store';
import { Gool } from 'src/app/models/Gool';
import { Match } from 'src/app/models/Match';

export const loadGools = createAction('[Gool] Load Gools');
export const loadGoolSuccess = createAction('[Gool] Load Gools Success', props<{ gools: Gool[] }>());
export const loadGoolFailure = createAction('[Gool] Load Gools Failure', props<{ error: any }>());

export const addMatch = createAction('[Match] Add Match', props<{ match: Match }>());
export const addMatchSuccess = createAction('[Match] Add Match Success', props<{ addedMatch: Match }>());
export const addMatchFailure = createAction('[Match] Add Match Failure', props<{ error: any }>());

export const updateMatch = createAction('[Match] Update Match', props<{ match: Match }>());
export const updateMatchSuccess = createAction('[Match] Update Match Success', props<{ updatedMatch: Match }>());
export const updateMatchFailure = createAction('[Match] Update Match Failure', props<{ error: any }>());

export const deleteMatch = createAction('[Match] Delete Match', props<{ matchId: number }>());
export const deleteMatchSuccess = createAction('[Match] Delete Match Success', props<{ deletedMatchId: number }>());
export const deleteMatchFailure = createAction('[Match] Delete Match Failure', props<{ error: any }>());

export const incrementGoals = createAction('[But] Increment Goals', props<{ id: number; newNumberOfGoals: number }>());
export const decrementGoals = createAction('[But] Decrement Goals', props<{ id: number; newNumberOfGoals: number }>());

export const searchGools = createAction('[Gool] Search Gools',props<{ playerName: string; equipeName: string; tournoiName: string; }>());
export const searchGoolsSuccess = createAction('[Gool] Search Gools Success',props<{ gools: Gool[]; }>());
export const searchGoolsFailure = createAction('[Gool] Search Gools Failure',props<{ error: any; }>());