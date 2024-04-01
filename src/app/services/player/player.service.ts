import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EquipeWithPlayer } from 'src/app/models/EquipeWithPlayer';
import { Player } from 'src/app/models/Player';
import { ApiUrls } from 'src/app/shared/config/ApiUrls';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(ApiUrls.Players_URL)
  }

  addPlayer(player: Player): Observable<Player[]> {
    return this.http.post<Player[]>(ApiUrls.Players_URL, player);
  }

  updatePlayer(player: Player): Observable<Player[]> {
    return this.http.put<Player[]>(ApiUrls.Players_URL + `/${player.idUser}`, player);
  }

  deletePlayer(id: number) {
    return this.http.delete(ApiUrls.Players_URL + `/${id}`)
  }

  getPlayersByEquipe(equipeId1: number, equipeId2: number): Observable<Player[]> {
    return this.http.get<Player[]>(`${ApiUrls.PlayerToEquipe_URL}/playersOfTwoEquipes/${equipeId1}/${equipeId2}`);
  }

}
