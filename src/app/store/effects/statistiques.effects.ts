import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as statisticsActions from '../actions/statistiques.actions';
import { StatisticsService } from 'src/app/services/statistics/statistics.service';

@Injectable()
export class StatisticsEffects {

    loadStatistics$ = createEffect(() => this.actions$.pipe(
        ofType(statisticsActions.loadStatistics),
        mergeMap(() => this.statisticsService.getStatistics()
            .pipe(
                map(statistics => statisticsActions.statisticsLoaded({ statistics })),
                catchError(error => of(statisticsActions.statisticsLoadFailed({ error })))
            ))
    )
    );

    constructor(
        private actions$: Actions,
        private statisticsService: StatisticsService
    ) { }
}
