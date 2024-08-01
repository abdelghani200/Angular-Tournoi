import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AdminState } from "../reducers/admins.reducer";

const getAdminsState = createFeatureSelector<AdminState>('admins');

export const getAdmins = createSelector(getAdminsState, state => state.admins);
export const getAdminsLoading = createSelector(getAdminsState, state => state.loading);
export const getAdminsError = createSelector(getAdminsState, state => state.error);
