import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  isLogged: Boolean = false

  constructor(public authService: AuthService, private router: Router){

  }

  ngOnInit(): void {
    this.isLogged = this.authService.getIsLogged();
    this.authService.loginSuccess.subscribe((loggedIn: Boolean) =>{
      this.isLogged = loggedIn;
    })
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
    localStorage.setItem('isLogged', 'false');
  }

}
