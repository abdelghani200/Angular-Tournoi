import { Component, Input, OnInit } from '@angular/core';
import { CalendarOptions, EventClickArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Store } from '@ngrx/store';
import { Tournoi } from 'src/app/models/Tournoi';
import * as fromTournoi from '../../../store/selectors/tournois.selectors';
import * as TournoiActions from '../../../store/actions/tournois.actions';
import * as MatchActions from '../../../store/actions/match.actions';
import { MatDialog } from '@angular/material/dialog';
import { MatchComponent } from '../../Admin/Match/match.component';
import { ListMatchComponent } from '../list-match/list-match.component';

@Component({
  selector: 'app-home',
  template: '<full-calendar [options]="calendarOptions"></full-calendar>',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store, private dialog: MatDialog) { }

  calendarOptions: CalendarOptions = {};

  ngOnInit(): void {
    this.store.dispatch(TournoiActions.loadTournois());
    this.setCalendarOptions();
  }

  setCalendarOptions(): void {
    this.store.select(fromTournoi.getTournois).subscribe(tournois => {
      const events = tournois.map((tournoi: Tournoi) => ({
        title: tournoi.nameTournoi,
        start: tournoi.dateDebut,
        end: tournoi.dateFin,
        id: tournoi.id.toString()
      }));
      console.log(events);
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        plugins: [dayGridPlugin],
        events: events,
        eventClick: this.handleEventClick.bind(this)
      };
    });
  }

  handleEventClick(eventClickArg: EventClickArg): void {
    console.log("Événement cliqué :", eventClickArg);
    const tournoiId = eventClickArg.event.id;
    this.store.dispatch(MatchActions.loadMatchs());
    this.dialog.open(ListMatchComponent);
  }
}
