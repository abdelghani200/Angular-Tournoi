import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from 'src/app/models/Player';
import { PlayerEquipe } from 'src/app/models/PlayerEquipe';
import { PlayerToEquipe } from 'src/app/models/PlayerToEquipe';
import { ApiUrls } from 'src/app/shared/config/ApiUrls';

@Injectable({
  providedIn: 'root'
})
export class PlayerToEquipeService {

  constructor(private http: HttpClient) { }

  PlayerToEquipe(player:PlayerToEquipe[]): Observable<any>{
    return this.http.post<PlayerToEquipe[]>(ApiUrls.PlayerToEquipe_URL, player);
  }

  getPlayersOEquipe(id: number): Observable<any>{
    return this.http.get(ApiUrls.PlayersByEquipe_URL + `/${id}/players`)
  }

}
