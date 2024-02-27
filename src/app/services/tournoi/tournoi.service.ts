import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tournoi } from 'src/app/models/Tournoi';
import { ApiUrls } from 'src/app/shared/config/ApiUrls';

@Injectable({
  providedIn: 'root'
})
export class TournoiService{

  constructor(private http: HttpClient) { }

  getTournois(): Observable<Tournoi[]>{
    return this.http.get<Tournoi[]>(ApiUrls.Tournois_URL)
  }

  addTournoi(tournoi: Tournoi): Observable<Tournoi[]>{
    return this.http.post<Tournoi[]>(ApiUrls.Tournois_URL, tournoi);
  }

  updateTournoi(tournoi: Tournoi): Observable<Tournoi[]>{
    return this.http.put<Tournoi[]>(ApiUrls.Tournois_URL + `/${tournoi.id}`, tournoi);
  }

  deleteTournoi(id: number): Observable<void> {
    return this.http.delete<void>(ApiUrls.Tournois_URL + `/${id}`);
  }
  

}
