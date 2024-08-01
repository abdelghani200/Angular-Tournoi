import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { RouterModule } from '@angular/router';
import { DemoFlexyModule } from '../demo-flexy-module';
import { FormsModule } from '@angular/forms';
import { EquipeComponent } from './Admin/equipe/equipe.component';
import { CommentaireComponent } from './Admin/commentaire/commentaire.component';
import { MatchComponent } from './Admin/Match/match.component';
import { PlayersComponent } from './Admin/players/players.component';
import { PlayerToEquipeComponent } from './Admin/player-to-equipe/player-to-equipe.component';
import { EquipeToTournoiComponent } from './Admin/equipe-to-tournoi/equipe-to-tournoi.component';
import { HomeComponent } from './User/home/home.component';
import { GoolComponent } from './Admin/gool/gool.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgChartsModule } from 'ng2-charts';
import { ListMatchComponent } from './User/list-match/list-match.component';
import { LoginComponent } from './Auth/login/login.component';
import { NavbarComponent } from './User/navbar/navbar.component';
import { RegisterComponent } from './Auth/register/register.component';
import { DetailsMatchComponent } from './User/details-match/details-match.component';
import { BoardComponent } from './User/board/board.component';
import { MtchComponent } from './User/mtch/mtch.component';
import { AdminsComponent } from './Admin/admins/admins.component';
import { PlayerToFifaComponent } from './Admin/player-to-fifa/player-to-fifa.component';

@NgModule({
  imports: [
    CommonModule,
    FeatherModule.pick(allIcons),
    DemoFlexyModule,
    FormsModule,
    FullCalendarModule,
    NgChartsModule,
    RouterModule
  ],
  exports: [
  ],
  declarations: [
    EquipeComponent,
    CommentaireComponent,
    MatchComponent,
    PlayersComponent,
    PlayerToEquipeComponent,
    EquipeToTournoiComponent,
    HomeComponent,
    GoolComponent,
    ListMatchComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    DetailsMatchComponent,
    BoardComponent,
    MtchComponent,
    AdminsComponent,
    PlayerToFifaComponent,
    
  ]
})
export class ComponentsModule { }
