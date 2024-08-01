import { Tournoi } from "./Tournoi"

export interface Stats{
    idEquipe: number
    nomEquipe: string
    type: string
    nbMatchsJoues: number
    points: number
    nbMatchsGagnes: number
    nbMatchsPerdus: number
    tournoi: Tournoi
}