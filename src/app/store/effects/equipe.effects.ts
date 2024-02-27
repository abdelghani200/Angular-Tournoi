import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as EquipeActions from '../../store/actions/equipe.actions';
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { EquipeService } from "src/app/services/equipe/equipe.service";
import { Injectable } from "@angular/core";
import { SweetAlertService } from "src/app/services/sweetAlert/sweet-alert.service";

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
        mergeMap(({ equipe }) => this.equipeService.addEquipe(equipe).pipe(
            map(addedEquipes => addedEquipes[0]),
            tap(() => this.sweetAlertService.showSuccess('Success', 'Level added successfully')),
            map(addedEquipe => EquipeActions.addEquipeSuccess({ addedEquipe })),
            catchError(error => of(EquipeActions.addEquipeFailure({ error })))
        ))
    ));

    updateEquipe$ = createEffect(() => this.actions$.pipe(
        ofType(EquipeActions.updateEquipe),
        mergeMap(({ equipe }) => this.equipeService.updateEquipe(equipe)
            .pipe(
                map(updatedEquipes => updatedEquipes[0]),
                map(updatedEquipe => EquipeActions.updateEquipeSuccess({ updatedEquipe })),
                catchError(error => of(EquipeActions.updateEquipeFailure({ error })))
            )
        )
    ));

    deleteEquipe$ = createEffect(() => this.actions$.pipe(
        ofType(EquipeActions.deleteEquipe),
        mergeMap(({ equipeId }) => this.equipeService.deleteEquipe(equipeId)
            .pipe(
                map(() => EquipeActions.deleteEquipeSuccess({ deletedEquipeId: equipeId })),
                catchError(error => of(EquipeActions.deleteEquipeFailure({ error })))
            )
        )
    ));


    constructor(
        private actions$: Actions,
        private equipeService: EquipeService,
        private sweetAlertService: SweetAlertService
    ) { }

}