import { createAction, props } from '@ngrx/store';

export const loadStatistics = createAction('[Statistics] Load Statistics');
export const statisticsLoaded = createAction('[Statistics] Statistics Loaded', props<{ statistics: any }>());
export const statisticsLoadFailed = createAction('[Statistics] Statistics Load Failed', props<{ error: any }>());
