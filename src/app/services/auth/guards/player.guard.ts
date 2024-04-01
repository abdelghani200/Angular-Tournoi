import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { T } from '@angular/cdk/keycodes';

@Injectable({
    providedIn: 'root'
})
export class PlayerGuard implements CanActivate{

    constructor(private authService: AuthService, private router: Router){

    }

    canActivate(): boolean {
        if(this.authService.isUser()){
            return true
        } else{
            this.router.navigate(['/login'])
            return false
        }
    }

}