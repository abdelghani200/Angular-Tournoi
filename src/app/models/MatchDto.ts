import { Equipe } from "./Equipe";
import { Player } from "./Player";
import { Tournoi } from "./Tournoi";

export interface MatchDto {
    id: number,
    dateMatch: string,
    heureMatch: string,
    tournoi: Tournoi,
    equipe1: Equipe,
    equipe2: Equipe
    player1: Player
    player2: Player
}