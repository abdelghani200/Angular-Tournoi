import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipe } from 'src/app/models/Equipe';
import { Stats } from 'src/app/models/Stats';
import { ApiUrls } from 'src/app/shared/config/ApiUrls';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  constructor(private http: HttpClient) { }

  getEquipes(): Observable<Equipe[]>{
    return this.http.get<Equipe[]>(ApiUrls.Equipes_URL)
  }

  addEquipe(equipe: Equipe): Observable<Equipe[]>{
    return this.http.post<Equipe[]>(ApiUrls.Equipes_URL, equipe);
  }

  updateEquipe(equipe: Equipe): Observable<Equipe[]>{
    return this.http.put<Equipe[]>(ApiUrls.Equipes_URL + `/${equipe.idEquipe}`, equipe);
  }

  deleteEquipe(id: number){
    return this.http.delete(ApiUrls.Equipes_URL + `/${id}`)
  }

  findAllWithMatchStats(): Observable<Stats[]>{
    return this.http.get<Stats[]>(ApiUrls.StatsEquipe_URL);
  }


}
