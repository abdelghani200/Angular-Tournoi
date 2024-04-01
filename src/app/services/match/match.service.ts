import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from 'src/app/models/Match';
import { ApiUrls } from 'src/app/shared/config/ApiUrls';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient) { }

  getMatchs(): Observable<Match[]>{
    return this.http.get<Match[]>(ApiUrls.Matchs_URL)
  }

  addMatch(match: Match): Observable<Match[]>{
    return this.http.post<Match[]>(ApiUrls.Matchs_URL, match);
  }

  addMatchFifa(match: Match): Observable<Match[]>{
    return this.http.post<Match[]>(ApiUrls.MatchFifa_URL, match);
  }

  updateMatch(match: Match): Observable<Match[]>{
    return this.http.put<Match[]>(ApiUrls.Matchs_URL + `/${match.idMatch}`, match);
  }

  deleteMatch(id: number){
    return this.http.delete(ApiUrls.Matchs_URL + `/${id}`)
  }

  getMatchesByTournoiId(id: number){
    return this.http.get(ApiUrls.Matchs_URL + `/${id}` + `/matches`)
  }

}
