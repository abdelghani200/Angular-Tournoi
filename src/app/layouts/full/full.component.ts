import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

interface sidebarMenu {
  link: string;
  icon: string;
  menu: string;
}

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent {

  search: boolean = false;
  user: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
    this.user = this.getUser()
  }

  routerActive: string = "activelink";

  sidebarMenu: sidebarMenu[] = [
    {
      link: "/admin/home",
      icon: "home",
      menu: "Dashboard",
    },
    {
      link: "/admin/tournoiListe",
      icon: "type",
      menu: "Tournois",
    },
    {
      link: "/admin/matchListe",
      icon: "life-buoy",
      menu: "Matchs",
    },
    {
      link: "/admin/equipes",
      icon: "users",
      menu: "Equipes",
    },
    {
      link: "/admin/commentaires",
      icon: "twitch",
      menu: "Commentaires",
    },
    {
      link: "/admin/players",
      icon: "users",
      menu: "Players",
    },
    {
      link: "/admin/admins",
      icon: "users",
      menu: "Admins",
    },
    {
      link: "/admin/gools",
      icon: "Dribbble",
      menu: "Gools",
    },
  ]

  getUser(): any {
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      const atIndex = user.email.indexOf('@');
      console.log(user.email.substring(0, atIndex))
      return user.email.substring(0, atIndex); // Extrait la partie avant '@'
    }
    return null; // Retourne null si aucun utilisateur trouvé
  }


}
