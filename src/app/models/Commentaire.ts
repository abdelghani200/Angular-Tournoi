import { Match } from "./Match"
import { Player } from "./Player"

export interface Commentaire{
    idCommentaire: number
    idUser: number
    matchId: number
    contenu: string
    date: Date
    heure: string
    valide: Boolean
    user: Player
    match: Match
}