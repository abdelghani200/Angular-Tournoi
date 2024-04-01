import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/models/Admin';
import { ApiUrls } from 'src/app/shared/config/ApiUrls';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }


  getAllAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(ApiUrls.Admins_URL)
  }



}
