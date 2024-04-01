import { Equipe } from "./Equipe"
import { Match } from "./Match"
import { Player } from "./Player"
import { Tournoi } from "./Tournoi"

export interface Gool{
    idBut: number
    match: Match
    equipe: Equipe
    player: Player
    numberOfGoal: number
    tournoi: Tournoi
}