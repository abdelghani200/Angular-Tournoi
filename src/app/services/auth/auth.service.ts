import { EventEmitter, Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiUrls } from 'src/app/shared/config/ApiUrls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private jwtHelper: JwtHelperService = new JwtHelperService();

  loginSuccess = new EventEmitter<String>();
  loginSuccess1 = new EventEmitter<Boolean>();

  constructor(private http: HttpClient) { }


  login(credentials: { email: String, password: String }): Observable<any> {
    return this.http.post(ApiUrls.Login_URL, credentials)
  }

  register(user: any){
    return this.http.post(ApiUrls.Register_URl, user)
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('isLogged');
    this.loginSuccess1.emit(false);
  }

  getIsLogged(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  emitLoginSuccess(token: string): void {
    this.loginSuccess.emit(token);
  }

  

  isAdmin(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      console.log(decodedToken);
      return decodedToken && decodedToken.role === 'ROLE_ADMIN';
    }
    return false;
  }

  isUser(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      return decodedToken && decodedToken.role === 'ROLE_PLAYER';
    }
    return false;
  }

}
