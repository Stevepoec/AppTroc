import { Guid } from "guid-typescript";

// Cette interface est un POCO
export interface SearchResult{
    no:string;
    dc : string;
    dl : string;
    id:Guid;
    v : number;
    id_prop : Guid;
}