import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EquipeWithPlayer } from 'src/app/models/EquipeWithPlayer';
import { ApiUrls } from 'src/app/shared/config/ApiUrls';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WithService {

  constructor(private http: HttpClient) { }


  getPlayersByOneEquipe(equipeId: number): Observable<EquipeWithPlayer[]> {
    return this.http.get<EquipeWithPlayer[]>(`${ApiUrls.PlayerToEquipe_URL}/${equipeId}/players`);
  }
  

}
