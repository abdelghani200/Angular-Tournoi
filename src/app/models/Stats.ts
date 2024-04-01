import { Tournoi } from "./Tournoi"

export interface Stats{
    idEquipe: number
    nomEquipe: number
    type: number
    nbMatchsJoues: number
    points: number
    nbMatchsGagnes: number
    nbMatchsPerdus: number
    tournoi: Tournoi
}