import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as EquipeToTournoiActions from '../actions/equipeToTournoi.actions';
import { EquipeToTournoiService } from 'src/app/services/EquipeToTournoi/equipe-to-tournoi.service';
import { SweetalertService } from 'src/app/services/sweetAlert/sweet-alert.service';

@Injectable()
export class EquipeToTournoiEffects {

    addEquipeToTournoi$ = createEffect(() =>
        this.actions$.pipe(
            ofType(EquipeToTournoiActions.addEquipeToTournoi),
            mergeMap(action =>
                this.playerToEquipeService.EquipeToTournoi(action.equipeToTournoi).pipe(
                    map(() => EquipeToTournoiActions.addEquipeToTournoiSuccess({ equipeToTournoi: action.equipeToTournoi })),
                    tap(() => this.sweetalertService.showSuccess('Equipe ajouté avec succès à tournoi ')),
                    catchError(error => of(EquipeToTournoiActions.addEquipeToTournoiFailure({ error })))
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private playerToEquipeService: EquipeToTournoiService,
        private sweetalertService: SweetalertService
    ) { }
}
