import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as AdminsActions from '../../store/actions/admin.actions';
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { Injectable } from "@angular/core";
import { AdminService } from "src/app/services/admin/admin.service";

@Injectable()
export class AdminEffects {
    loadAdmins$ = createEffect(() => this.actions$.pipe(
        ofType(AdminsActions.loadAdmins),
        mergeMap(() => this.adminService.getAllAdmins()
            .pipe(
                map(admins => AdminsActions.loadAdminsSuccess({ admins })),
                catchError((error) => {
                    console.error('Error fetching admins:', error);
                    return of(AdminsActions.loadAdminsFailure({ error }));
                })
            ))
    ));



    constructor(
        private actions$: Actions,
        private adminService: AdminService,
    ) { }

}