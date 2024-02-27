import { TypeTournoi } from "./enums/TypeTournoi";

export interface Tournoi{
    id: number,
    nameTournoi: string,
    type: TypeTournoi,
    dateDebut: string
    dateFin: string
}