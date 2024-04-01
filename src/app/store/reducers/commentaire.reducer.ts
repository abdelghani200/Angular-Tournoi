import { createReducer, on } from '@ngrx/store';
import * as CommentaireActions from '../actions/commentaire.actions';
import { Commentaire } from 'src/app/models/Commentaire';

export interface CommentaireState {
    commentaires: Commentaire[];
    loading: boolean;
    error: any;
}

export const initialState: CommentaireState = {
    commentaires: [],
    loading: false,
    error: null,
};

export const commentaireReducer = createReducer(
    initialState,
    on(CommentaireActions.loadCommentaires, state => ({ ...state, loading: true, error: null })),
    on(CommentaireActions.loadCommentairesSuccess, (state, { commentaires }) => ({ ...state, commentaires, loading: false })),
    on(CommentaireActions.loadCommentairesFailure, (state, { error }) => ({ ...state, error, loading: false })),

    on(CommentaireActions.updateCommentaire, state => ({ ...state, loading: true, error: null })),
    on(CommentaireActions.updateCommentaireSuccess, (state, { updatedCommentaire }) => {
        const updatedCommentaires = state.commentaires.map(commentaire => commentaire.idCommentaire === updatedCommentaire.idCommentaire ? updatedCommentaire : commentaire);
        return { ...state, equipes: updatedCommentaires, loading: false };
    }),
    on(CommentaireActions.updateCommentaireFailure, (state, { error }) => ({ ...state, error, loading: false })),

    on(CommentaireActions.deleteCommentaire, state => ({ ...state, loading: true, error: null })),
    on(CommentaireActions.deleteCommentaireSuccess, (state, { deletedCommentaireId }) => ({
        ...state,
        commentaires: state.commentaires.filter(commentaire => commentaire.idCommentaire !== deletedCommentaireId),
        loading: false
    })),
    on(CommentaireActions.deleteCommentaireFailure, (state, { error }) => ({ ...state, error, loading: false })),

    on(CommentaireActions.addCommentaire, state => ({ ...state, loading: true, error: null })),
    on(CommentaireActions.addCommentaireSuccess, (state, { commentaire }) => ({
        ...state,
        commentaires: [...state.commentaires, commentaire],
        loading: false
    })),
    on(CommentaireActions.addCommentaireFailure, (state, { error }) => ({ ...state, error, loading: false })),

);
