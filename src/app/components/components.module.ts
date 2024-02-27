import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './alerts/alerts.component';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { FormsComponent } from './forms/forms.component';
import { DemoFlexyModule } from '../demo-flexy-module';
import { GridListComponent } from './grid-list/grid-list.component';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { ChipsComponent } from './chips/chips.component';
import { ProgressComponent } from './progress/progress.component';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { EquipeComponent } from './Admin/equipe/equipe.component';
import { CommentaireComponent } from './Admin/commentaire/commentaire.component';
import { LikeComponent } from './Admin/like/like.component';
// import { TournoiComponent } from './Admin/Tournoi/tournoi.component';
import { MatchComponent } from './Admin/Match/match.component';
import { PlayersComponent } from './Admin/players/players.component';
import { PlayerToEquipeComponent } from './Admin/player-to-equipe/player-to-equipe.component';
import { EquipeToTournoiComponent } from './Admin/equipe-to-tournoi/equipe-to-tournoi.component';
import { HomeComponent } from './User/home/home.component';
import { GoolComponent } from './Admin/gool/gool.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgChartsModule } from 'ng2-charts';
import { ListMatchComponent } from './User/list-match/list-match.component';

@NgModule({
  imports: [
    CommonModule,
    FeatherModule.pick(allIcons),
    DemoFlexyModule,
    ButtonsComponent,
    SlideToggleComponent,
    SliderComponent,
    ToolbarComponent,
    ProgressSnipperComponent,
    SnackbarComponent,
    MenuComponent,
    TabsComponent,
    ExpansionComponent,
    ChipsComponent,
    ProgressComponent,
    FormsComponent,
    AlertsComponent,
    GridListComponent,
    TooltipsComponent,
    FormsModule,
    FullCalendarModule,
    NgChartsModule
  ],
  exports: [
    AlertsComponent,
    FormsComponent,
    GridListComponent,
    MenuComponent,
    TabsComponent,
    ExpansionComponent,
    ChipsComponent,
    ProgressComponent,
    ToolbarComponent,
    ProgressSnipperComponent,
    SnackbarComponent,
    SliderComponent,
    SlideToggleComponent,
    ButtonsComponent,
  ],
  declarations: [
    EquipeComponent,
    CommentaireComponent,
    LikeComponent,
    MatchComponent,
    PlayersComponent,
    PlayerToEquipeComponent,
    EquipeToTournoiComponent,
    HomeComponent,
    GoolComponent,
    ListMatchComponent,
    
  ]
})
export class ComponentsModule { }
