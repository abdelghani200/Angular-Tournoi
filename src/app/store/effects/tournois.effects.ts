import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import * as TournoisActions from '../actions/tournois.actions';
import { TournoiService } from 'src/app/services/tournoi/tournoi.service';
import { SweetalertService } from 'src/app/services/sweetAlert/sweet-alert.service';

@Injectable()
export class TournoisEffects {

    loadTournois$ = createEffect(() => this.actions$.pipe(
        ofType(TournoisActions.loadTournois),
        mergeMap(() => this.tournoiService.getTournois()
            .pipe(
                map(tournois => TournoisActions.loadTournoisSuccess({ tournois })),
                catchError(error => EMPTY)
            ))
    ));

    addTournoi$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(TournoisActions.addTournoi),
            mergeMap((action) => {
                return this.tournoiService.addTournoi(action.tournoi).pipe(
                    tap(() => this.sweetalertService.showSuccess('Tournoi ajouté avec succès')),
                    map(() => {
                        return TournoisActions.loadTournois()
                    }),
                    catchError((error) => {
                        this.sweetalertService.showError('Erreur lors de l\'ajout du tournoi');
                        return of(TournoisActions.loadTournoisFailure({ error }));
                    })
                );
            })
        );
    });

    updateTournoi$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(TournoisActions.updateTournoi),
            mergeMap((action) =>
                this.tournoiService.updateTournoi(action.tournoi).pipe(
                    tap(() => this.sweetalertService.showSuccess('Tournoi mis à jour avec succès')),
                    map(() => TournoisActions.loadTournois()),
                    catchError((error) => {
                        this.sweetalertService.showError('Erreur lors de la mise à jour du tournoi');
                        return of(TournoisActions.loadTournoisFailure({ error }));
                    })
                )
            )
        );
    });

    deleteTournoi$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(TournoisActions.deleteTournoi),
            mergeMap((action) =>
                this.tournoiService.deleteTournoi(action.tournoiId).pipe(
                    tap(() => this.sweetalertService.showSuccess('Tournoi supprimé avec succès')),
                    map(() => TournoisActions.loadTournois()),
                    catchError((error) => {
                        this.sweetalertService.showError('Erreur lors de la suppression du tournoi');
                        return of(TournoisActions.loadTournoisFailure({ error }));
                    })
                )
            )
        );
    });

    constructor(
        private actions$: Actions,
        private tournoiService: TournoiService,
        private sweetalertService: SweetalertService
    ) { }
}
