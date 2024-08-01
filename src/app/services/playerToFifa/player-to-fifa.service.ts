import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerToFifa } from 'src/app/models/PlayerToFifa';
import { ApiUrls } from 'src/app/shared/config/ApiUrls';

@Injectable({
  providedIn: 'root'
})
export class PlayerToFifaService {

  constructor(private http: HttpClient) { }

  PlayerToFifa(player: PlayerToFifa): Observable<PlayerToFifa[]> {
    return this.http.post<PlayerToFifa[]>(ApiUrls.Fifa_URl, player);
  }

}
