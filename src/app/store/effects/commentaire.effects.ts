import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as CommentaireActions from '../actions/commentaire.actions';
import { Injectable } from "@angular/core";
import { CommentaireService } from "src/app/services/commentaire/commentaire.service";
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class CommentaireEffects {
    loadsCommentaires$ = createEffect(() => this.actions$.pipe(
        ofType(CommentaireActions.loadCommentaires),
        mergeMap(() => this.commentaireService.getAllCommentaires()
            .pipe(
                map(commentaires => CommentaireActions.loadCommentairesSuccess({ commentaires })),
                catchError((error) => {
                    return of(CommentaireActions.loadCommentairesFailure({ error }));
                }
                ))
        ))
    );

    addCommentaire$ = createEffect(() => this.actions$.pipe(
        ofType(CommentaireActions.addCommentaire),
        mergeMap(({ matchId, contenu, user }) =>
            this.commentaireService.addCommentaire(matchId, contenu, user)
                .pipe(
                    map(commentaire => CommentaireActions.addCommentaireSuccess({ commentaire })),
                    catchError(error =>
                        of(CommentaireActions.addCommentaireFailure({ error }))
                    )
                )
        )
    ));
    



    constructor(
        private actions$: Actions,
        private commentaireService: CommentaireService
    ) {

    }
}

