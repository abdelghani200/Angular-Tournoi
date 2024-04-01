import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commentaire } from 'src/app/models/Commentaire';
import { ApiUrls } from 'src/app/shared/config/ApiUrls';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(private http: HttpClient) { }

  getAllCommentaires(): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(ApiUrls.Commentaires_URL);
  }


  addCommentaire(matchId: number, contenu: any, user: any): Observable<Commentaire> {
    const url = `${ApiUrls.Commentaires_URL}/add`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = {
      matchId: matchId,
      contenu: contenu,
      user: user
    };
    return this.http.post<Commentaire>(url, body, httpOptions);
  }

  validerCommentaire(commentaireId: number): Observable<Commentaire> {
    const url = `${ApiUrls.Commentaires_URL}/update/${commentaireId}`;
    return this.http.put<Commentaire>(url, null);
  }

}
