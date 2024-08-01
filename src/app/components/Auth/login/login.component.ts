import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  credentials = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router){

  }

  onSubmit(): void {
    this.authService.login(this.credentials).subscribe(
      response => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        this.authService.emitLoginSuccess(response.token);
        if (this.authService.isAdmin()) {
          console.log('Navigating to admin dashboard...');
          this.router.navigate(['/admin/dashboard']);
        } else {
          console.log('Navigating to user home...');
          this.router.navigate(['/user/home']);
        }
      },
    );
  }
  

}
