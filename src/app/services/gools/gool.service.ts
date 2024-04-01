import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gool } from 'src/app/models/Gool';
import { ApiUrls } from 'src/app/shared/config/ApiUrls';
import { tap } from 'rxjs/operators';
import { EquipeWithPlayer } from 'src/app/models/EquipeWithPlayer';

@Injectable({
  providedIn: 'root'
})
export class GoolService {

  constructor(private http: HttpClient) { }

  getGools(): Observable<Gool[]>{
    return this.http.get<Gool[]>(ApiUrls.Gools_URL);
  }

  addGool(gool: Gool): Observable<Gool[]>{
    return this.http.post<Gool[]>(ApiUrls.Gools_URL, gool);
  }

  incrementGoals(id: number, newNumberOfGoals: number): Observable<void> {
    const url = `${ApiUrls.Gools_URL}/${id}/IncrementGoals`;
    return this.http.put<void>(url, { newNumberOfGoals });
  }

  decrementGoals(id: number, newNumberOfGoals: number): Observable<void> {
    const url = `${ApiUrls.Gools_URL}/${id}/DecrementGoals`;
    return this.http.put<void>(url, { newNumberOfGoals });
  }

  searchGools(playerName: string, equipeName: string, tournoiName: string): Observable<Gool[]> {
    let params = new HttpParams();
    if (playerName) {
      params = params.set('playerName', playerName);
    }
    if (equipeName) {
      params = params.set('equipeName', equipeName);
    }
    if (tournoiName) {
      params = params.set('tournoiName', tournoiName);
    }

    return this.http.get<Gool[]>(ApiUrls.Gools_URL + '/search', { params });
  }

}
