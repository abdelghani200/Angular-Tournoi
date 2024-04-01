import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromCommentaire from '../../../store/selectors/commentaire.selectors';
import * as CommentaireActions from '../../../store/actions/commentaire.actions';
import { CommentaireService } from 'src/app/services/commentaire/commentaire.service';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.scss']
})
export class CommentaireComponent implements OnInit {

  dataSource$ = this.store.select(fromCommentaire.getCommentaires);

  displayedColumns: string[] = ['idCommentaire', 'nomUser', 'prenomUser', 'contenu', 'date', 'heure', 'actions'];

  constructor(private store: Store, private serviceComments: CommentaireService) {

  }

  ngOnInit(): void {
    this.store.dispatch(CommentaireActions.loadCommentaires())

    this.dataSource$.subscribe(commentaire => {
      console.log("All commentaire", commentaire)
    })
  }

  validerCommentaire(commentaireId: number): void {
    this.serviceComments.validerCommentaire(commentaireId).subscribe(() => {
      console.log('Commentaire validé avec succès.');
    }, error => {
      console.error('Erreur lors de la validation du commentaire :', error);
    });
  }

}
