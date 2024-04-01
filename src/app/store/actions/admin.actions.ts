import { createAction, props } from '@ngrx/store';
import { Admin } from 'src/app/models/Admin';

export const loadAdmins = createAction('[Admin] Load Admins');
export const loadAdminsSuccess = createAction('[Admin] Load Admins Success', props<{ admins: Admin[] }>());
export const loadAdminsFailure = createAction('[Admin] Load Admins Failure', props<{ error: any }>());


export const updateAdmin = createAction('[Admin] Update Admin', props<{ admins: Admin }>());
export const updateAdminSuccess = createAction('[Admin] Update Admin Success', props<{ updatedAdmin: Admin }>());
export const updatePlayerFailure = createAction('[Admin] Update Admin Failure', props<{ error: any }>());

export const deleteAdmin = createAction('[Admin] Delete Admin', props<{ playerId: number }>());
export const deleteAdminSuccess = createAction('[Admin] Delete Admin Success', props<{ deletedAdminId: number }>());
export const deleteAdminFailure = createAction('[Admin] Delete Admin Failure', props<{ error: any }>());
