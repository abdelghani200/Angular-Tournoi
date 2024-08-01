import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EquipeToTournoi } from 'src/app/models/EquipeToTournoi';
import { ApiUrls } from 'src/app/shared/config/ApiUrls';

@Injectable({
  providedIn: 'root'
})
export class EquipeToTournoiService {

  constructor(private http: HttpClient) { }

  EquipeToTournoi(player: EquipeToTournoi): Observable<EquipeToTournoi[]>{
    return this.http.post<EquipeToTournoi[]>(ApiUrls.EquipeToTournoi_URL, player);
  }
  
}
