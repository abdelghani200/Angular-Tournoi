import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as EquipeActions from '../../store/actions/equipe.actions';
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { EquipeService } from "src/app/services/equipe/equipe.service";
import { Injectable } from "@angular/core";
import { SweetalertService } from "src/app/services/sweetAlert/sweet-alert.service";

@Injectable()
export class EquipeEffects {

    loadMatchs$ = createEffect(() => this.actions$.pipe(
        ofType(EquipeActions.loadEquipes),
        mergeMap(() => this.equipeService.getEquipes()
            .pipe(
                map(equipes => EquipeActions.loadEquipesSuccess({ equipes })),
                catchError((error) => {
                    console.error('Error fetching equipes:', error);
                    return of(EquipeActions.loadEquipesFailure({ error }));
                })
            ))
    ));

    addEquipe$ = createEffect(() => this.actions$.pipe(
        ofType(EquipeActions.addEquipe),
        mergeMap((action) => {
            return this.equipeService.addEquipe(action.equipe).pipe(
                tap(() => this.sweetalertService.showSuccess('Equipe ajouté avec succès')),
                map(() => {
                    return EquipeActions.loadEquipes()
                }),
                catchError((error) => {
                    this.sweetalertService.showError('Erreur lors de l\'ajout du equipe');
                    return of(EquipeActions.loadEquipesFailure({ error }));
                })
            );
        })
    ));

    // Gestion des opérations  Traitement des erreurs 

    updateEquipe$ = createEffect(() => this.actions$.pipe(
        ofType(EquipeActions.updateEquipe),
        mergeMap(({ equipe }) => this.equipeService.updateEquipe(equipe)
            .pipe(
                map(updatedEquipes => updatedEquipes[0]),
                map(updatedEquipe => EquipeActions.updateEquipeSuccess({ updatedEquipe })),
                tap(() => this.sweetalertService.showSuccess('Equipe modifeir avec succès')),
                map(() => {
                    return EquipeActions.loadEquipes()
                }),
                catchError(error => of(EquipeActions.updateEquipeFailure({ error })))
            )
        )
    ));

    deleteEquipe$ = createEffect(() => this.actions$.pipe(
        ofType(EquipeActions.deleteEquipe),
        mergeMap(({ equipeId }) => this.equipeService.deleteEquipe(equipeId)
            .pipe(
                tap(() => this.sweetalertService.showSuccess('Equipe supprimé avec succès')),
                    map(() => EquipeActions.loadEquipes()),
                map(() => EquipeActions.deleteEquipeSuccess({ deletedEquipeId: equipeId })),
                catchError(error => of(EquipeActions.deleteEquipeFailure({ error })))
            )
        )
    ));


    constructor(
        private actions$: Actions,
        private equipeService: EquipeService,
        private sweetalertService: SweetalertService
    ) { }

}