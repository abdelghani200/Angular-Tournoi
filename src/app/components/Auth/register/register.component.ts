import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SweetalertService } from 'src/app/services/sweetAlert/sweet-alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registration: any = {
    role: 'PLAYER',
    type: 'Membre',
    activated: false
  }

  constructor(private authService: AuthService, private sweetAlertService: SweetalertService, private router: Router) {

  }

  ngOnInit(): void {

  }


  register() {
    this.authService.register(this.registration).subscribe(
      (response) => {
        this.sweetAlertService.showSuccess('User registered successfully!');
        console.log('User registered successfully:', response);
        this.router.navigate(['/login']);
      },
      (error) => {
        this.sweetAlertService.showError('Registration failed. Please try again.');
        console.error('Error occurred during registration:', error);
      }
    );
  }
  

}
