import { Equipe } from "./Equipe"
import { Player } from "./Player"

export interface Gool{
    idBut: number
    match: Math
    equipe: Equipe
    player: Player
    numberOfGoal: number
}