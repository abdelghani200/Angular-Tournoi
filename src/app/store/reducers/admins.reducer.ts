import { createReducer, on } from '@ngrx/store';
import * as AdminActions from '../actions/admin.actions';
import { Admin } from 'src/app/models/Admin';

export interface AdminState {
    admins: Admin[];
    loading: boolean;
    error: any;
}

export const initialState: AdminState = {
    admins: [],
    loading: false,
    error: null,
};

export const adminReducer = createReducer(
    initialState,
    on(AdminActions.loadAdmins, state => ({ ...state, loading: true, error: null })),
    on(AdminActions.loadAdminsSuccess, (state, { admins }) => ({ ...state, admins, loading: false })),
    on(AdminActions.loadAdminsFailure, (state, { error }) => ({ ...state, error, loading: false })),


);
