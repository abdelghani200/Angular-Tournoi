import { createAction, props } from "@ngrx/store";
import { Stats } from "src/app/models/Stats";

export const loadStatsEquipe = createAction('[Stats] Load Stats');
export const loadStatsEquipesSuccess = createAction('[Stats] Load Stats Success', props<{ stats: Stats[] }>());
export const loadStatsEquipesFailure = createAction('[Stats] Load Stats Failure', props<{ error: any }>());
