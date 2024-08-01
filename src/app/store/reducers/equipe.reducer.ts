import { createReducer, on } from '@ngrx/store';
import * as EquipeActions from '../actions/equipe.actions';
import { Equipe } from 'src/app/models/Equipe';

export interface EquipeState {
    equipes: Equipe[];
    loading: boolean;
    error: any;
}

export const initialState: EquipeState = {
    equipes: [],
    loading: false,
    error: null,
};

export const equipeReducer = createReducer(
    initialState,
    on(EquipeActions.loadEquipes, state => ({ ...state, loading: true, error: null })),
    on(EquipeActions.loadEquipesSuccess, (state, { equipes }) => ({ ...state, equipes, loading: false })),
    on(EquipeActions.loadEquipesFailure, (state, { error }) => ({ ...state, error, loading: false })),

    on(EquipeActions.addEquipe, state => ({ ...state, loading: true, error: null })),
    on(EquipeActions.addEquipeSuccess, (state, { addedEquipe }) => ({ ...state, equipes: [...state.equipes, addedEquipe], loading: false })),
    on(EquipeActions.addEquipeFailure, (state, { error }) => ({ ...state, error, loading: false })),

    on(EquipeActions.updateEquipe, state => ({ ...state, loading: true, error: null })),
    on(EquipeActions.updateEquipeSuccess, (state, { updatedEquipe }) => {
        const updatedEquipes = state.equipes.map(equipe => equipe.idEquipe === updatedEquipe.idEquipe ? updatedEquipe : equipe);
        return { ...state, equipes: updatedEquipes, loading: false };
    }),
    on(EquipeActions.updateEquipeFailure, (state, { error }) => ({ ...state, error, loading: false })),

    on(EquipeActions.deleteEquipe, state => ({ ...state, loading: true, error: null })),
    on(EquipeActions.deleteEquipeSuccess, (state, { deletedEquipeId }) => ({
        ...state,
        equipes: state.equipes.filter(equipe => equipe.idEquipe !== deletedEquipeId),
        loading: false
    })),
    on(EquipeActions.deleteEquipeFailure, (state, { error }) => ({ ...state, error, loading: false })),

);


// sont des fonctions pures responsables de la gestion des modifications de l'état de l'application en réponse aux actions déclenchées