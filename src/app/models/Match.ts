import { Equipe } from "./Equipe";
import { Player } from "./Player";
import { Tournoi } from "./Tournoi";

export interface Match {
    idMatch: number,
    dateMatch: string,
    heureMatch: string,
    tournoiId: number,
    equipe1Id: number,
    equipe2Id: number,
    scoreEquipe1: number,
    scoreEquipe2: number,

    player1Id: number,
    player2Id: number,

    tournoi: Tournoi,
    equipe1: Equipe,
    equipe2: Equipe
    player1: Player,
    player2: Player
    isTeam: boolean;
}