import { Guid } from "guid-typescript";

// Cette interface est un POCO
export interface SearchResult{
    Nom_Objet:string;
    Description_Courte : string;
    Descrition_Longue : string;
    Id_Objet:Guid;
    valeur : number;
}