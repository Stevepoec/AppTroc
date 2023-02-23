import { Guid } from "guid-typescript";

// Cette interface est un POCO
export interface SearchResultPret{
    id:Guid;
    ddp : Date;
    dfp : Date;
    a: boolean;
    ddr : Date;
    dfr : Date;
    crec : string;
    cret : string;
    ne : Number;
    ce : string;
    np : Number;
    cp : string;
    ido : Guid;
    ide : Guid;
}