import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerToEquipe } from 'src/app/models/PlayerToEquipe';
import { ApiUrls } from 'src/app/shared/config/ApiUrls';

@Injectable({
  providedIn: 'root'
})
export class PlayerToEquipeService {

  constructor(private http: HttpClient) { }

  PlayerToEquipe(player: PlayerToEquipe): Observable<PlayerToEquipe[]>{
    return this.http.post<PlayerToEquipe[]>(ApiUrls.PlayerToEquipe_URL, player);
  }

}
