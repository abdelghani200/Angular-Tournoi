import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullComponent } from './layouts/full/full.component';
import { DemoFlexyModule } from './demo-flexy-module';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgChartsModule } from 'ng2-charts';

// Modules
import { DashboardModule } from './dashboard/dashboard.module';
import { ComponentsModule } from './components/components.module';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { TournoiFormComponent } from './shared/form/tournoi-form/tournoi-form.component';
import { TournoiComponent } from './components/Admin/Tournoi/tournoi.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { tournoisReducer } from './store/reducers/tournois.reducer';
import { TournoisEffects } from './store/effects/tournois.effects';
import { matchReducer } from './store/reducers/match.reducer';
import { MatchEffects } from './store/effects/match.effects';
import { equipeReducer } from './store/reducers/equipe.reducer';
import { EquipeEffects } from './store/effects/equipe.effects';
import { playerReducer } from './store/reducers/player.reducer';
import { PlayerEffects } from './store/effects/player.effects';
import { PlayerToEquipeReducer } from './store/reducers/playerToEquipe.reducers';
import { PlayerToEquipeEffects } from './store/effects/playerToEquipe';
import { equipeToTournoiReducer } from './store/reducers/equipeToTournoi.reducers';
import { EquipeToTournoiEffects } from './store/effects/equipeToTournoi';
import { GoolEffects } from './store/effects/gool.effects';
import { goolReducer } from './store/reducers/gool.reducer';
import { MatchFormComponent } from './shared/form/match-form/match-form.component';
import { FormEquipeComponent } from './shared/form/form-equipe/form-equipe.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    TournoiFormComponent,
    TournoiComponent,
    MatchFormComponent,
    FormEquipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FeatherModule.pick(allIcons),
    DemoFlexyModule,
    DashboardModule,
    ComponentsModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    NgChartsModule,
    ReactiveFormsModule,
    FullCalendarModule,
    StoreModule.forRoot({
      tournois: tournoisReducer,
      matchs: matchReducer,
      equipes: equipeReducer,
      players: playerReducer,
      PlayerToEquipes: PlayerToEquipeReducer,
      equipeToTournoi: equipeToTournoiReducer,
      gools: goolReducer
    }),
    EffectsModule.forRoot([TournoisEffects, MatchEffects, EquipeEffects, PlayerEffects, PlayerToEquipeEffects, EquipeToTournoiEffects, GoolEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
