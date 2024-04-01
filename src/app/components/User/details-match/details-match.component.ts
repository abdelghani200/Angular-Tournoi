import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map, switchMap } from "rxjs/operators";
import * as fromPlayerOfEquipe from '../../../store/selectors/playerToEquipe.selectors';
import * as fromComment from '../../../store/selectors/commentaire.selectors';
import * as MaPActions from '../../../store/actions/player.actions';
import * as MapSelectors from '../../../store/selectors/player.selectors';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/models/Player';
import { Match } from 'src/app/models/Match';
import * as ActionsComments from '../../../store/actions/commentaire.actions';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-details-match',
  templateUrl: './details-match.component.html',
  styleUrls: ['./details-match.component.scss']
})
export class DetailsMatchComponent implements OnInit {

  match$!: Observable<Match | undefined>;
  matchResult: any = {};

  comments$ = this.store.select(fromComment.getCommentaires);

  matchId!: number
  commentaire: any
  user: any

  players$!: Observable<Player[]>;
  playersSubscription!: Subscription;
  equipe1Players: Player[] = [];
  equipe2Players: Player[] = [];

  constructor(private store: Store, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.store.dispatch(ActionsComments.loadCommentaires());

    this.comments$.subscribe(data =>{
      console.log("comments",data)
    })
    let equipe1Id: number;
    let equipe2Id: number;
    this.route.paramMap.subscribe(params => {
      const idString = params.get('id');
      if (idString && idString !== 'undefined') {
        const id = +idString;
        this.match$ = this.store.select(fromPlayerOfEquipe.getMatchById(id));

        this.match$.subscribe(match => {
          if (match) {
            console.log(match)
            this.matchId = match.idMatch;
            equipe1Id = match.equipe1.idEquipe;
            equipe2Id = match.equipe2.idEquipe;
            this.store.dispatch(MaPActions.getPlayersOfTwoEquipes({ equipeId1: equipe1Id, equipeId2: equipe2Id }));
          }
        });
      }
    });

    this.players$ = this.store.select(MapSelectors.getPlayersOfTwoEquipes);
    this.playersSubscription = this.players$.subscribe(data => {
      console.log("Players of two equipes:", data);
      if (equipe1Id && equipe2Id) {
        this.equipe1Players = data.filter(player => player.equipe.idEquipe === equipe1Id);
        this.equipe2Players = data.filter(player => player.equipe.idEquipe === equipe2Id);
      }
    });
  }

  commentInput: string = '';

  addComment(): void {
    let matchId: number;
  
    this.match$.subscribe(match => {
      if (match) {
        matchId = match.idMatch;
      }
    });
  
    const userId = JSON.parse(localStorage.getItem('user') || '{}').id;
  
    if (this.matchId && this.commentInput && userId) {
      const commentData = {
        matchId: this.matchId,
        contenu: this.commentInput,
        user: userId,
      };

      console.log(commentData.contenu)
      
      this.store.dispatch(ActionsComments.addCommentaire(commentData));


    } else {
      console.log('Missing required parameters for adding a comment.');
    }
  }

}
