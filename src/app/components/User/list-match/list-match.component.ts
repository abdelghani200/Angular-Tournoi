import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-match',
  templateUrl: './list-match.component.html',
  styleUrls: ['./list-match.component.scss']
})
export class ListMatchComponent implements OnInit {

  matches: any[] = []; // Assurez-vous de remplacer any[] par le type réel de vos données de match

  constructor() { }

  ngOnInit(): void {
    // Ici, vous pouvez charger vos données de match depuis une API ou un service
    this.loadMatches();
  }

  loadMatches(): void {
    // Exemple de chargement de données fictives
    this.matches = [
      { team1: 'Équipe A', team2: 'Équipe B', date: '2024-02-16', stadium: 'Stade XYZ' },
      { team1: 'Équipe C', team2: 'Équipe D', date: '2024-02-18', stadium: 'Stade ABC' },
      // Ajoutez d'autres matchs au besoin
    ];
  }

}
