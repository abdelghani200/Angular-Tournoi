import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { EquipeComponent } from './components/Admin/equipe/equipe.component';
import { CommentaireComponent } from './components/Admin/commentaire/commentaire.component';
import { MatchComponent } from './components/Admin/Match/match.component';
import { TournoiComponent } from './components/Admin/Tournoi/tournoi.component';
import { TournoiFormComponent } from './shared/form/tournoi-form/tournoi-form.component';
import { PlayersComponent } from './components/Admin/players/players.component';
import { PlayerToEquipeComponent } from './components/Admin/player-to-equipe/player-to-equipe.component';
import { GoolComponent } from './components/Admin/gool/gool.component';
import { HomeComponent } from './components/User/home/home.component';
import { NavbarComponent } from './components/User/navbar/navbar.component';
import { LoginComponent } from './components/Auth/login/login.component';
import { RegisterComponent } from './components/Auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsMatchComponent } from './components/User/details-match/details-match.component';
import { BoardComponent } from './components/User/board/board.component';
import { MtchComponent } from './components/User/mtch/mtch.component';
import { AdminsComponent } from './components/Admin/admins/admins.component';
import { AdminGuard } from './services/auth/guards/admin.guard';



const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "user",
        component: NavbarComponent,
        children: [
          { path: "", redirectTo: "/user/home", pathMatch: "full" },
          { path: "home", component: NavbarComponent },
          { path: "accueil", component: HomeComponent },
          { path: "match-details/:id", component: DetailsMatchComponent },
          { path: "board", component: BoardComponent},
          { path: "mtch", component: MtchComponent}
        ]
      },
      {
        path: "admin",
        component: FullComponent,
        children: [
          { path: "", redirectTo: "/admin/dashboard", pathMatch: "full" },
          { path: "dashboard", component: DashboardComponent },
          { path: "tournoiListe", component: TournoiComponent },
          { path: "matchListe", component: MatchComponent },
          { path: "equipes", component: EquipeComponent },
          { path: "commentaires", component: CommentaireComponent },
          { path: 'form-tournoi', component: TournoiFormComponent },
          { path: "players", component: PlayersComponent , canActivate: [AdminGuard]},
          { path: "playerToEquipe", component: PlayerToEquipeComponent },
          { path: "gools", component: GoolComponent },
          { path: "admins", component: AdminsComponent}
        ]
      },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
