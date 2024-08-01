import { Equipe } from "./Equipe"
import { Player } from "./Player"

export interface EquipeWithPlayer{
    id: number
    equipe: Equipe
    player: Player
}