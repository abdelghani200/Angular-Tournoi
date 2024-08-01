import { Equipe } from "./Equipe";
import { Player } from "./Player";
import { Tournoi } from "./Tournoi";

export interface PlayerEquipe {
    equipe: Equipe,
    user: Player,
    tournoi: Tournoi
}