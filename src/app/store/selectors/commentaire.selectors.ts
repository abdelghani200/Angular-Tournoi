import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CommentaireState } from "../reducers/commentaire.reducer";

const getCommentaireState = createFeatureSelector<CommentaireState>('commentaires');

export const getCommentaires = createSelector(getCommentaireState, state => state.commentaires);
export const getCommentairesLoading = createSelector(getCommentaireState, state => state.loading);
export const getCommentairesError = createSelector(getCommentaireState, state => state.error);
