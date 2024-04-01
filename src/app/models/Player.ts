import { Equipe } from "./Equipe";

export interface Player {
    idUser: number;
    nomUser: string;
    prenomUser: string;
    email: string;
    role: string;


    
    equipe: Equipe
    player?: Player

}
