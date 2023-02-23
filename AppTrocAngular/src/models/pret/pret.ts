

import { Guid } from "guid-typescript";
import { appUser } from "../appUser/appUser";
import { Objet } from "../objet/objet";


export class Pret {
    
    
    constructor(Date_Debut_Prevue: Date) {
        // set du Date_Debut_Prevue
        this.Date_Debut_Prevue = Date_Debut_Prevue;

    }

    //#region Date_Debut_Prevue
    private _Date_Debut_Prevue!: Date;
    public get Date_Debut_Prevue(): Date {
        return this._Date_Debut_Prevue;
    }
    public set Date_Debut_Prevue(value: Date) {
        this._Date_Debut_Prevue = value;
    }
    //#endregion

    //#region Date_Fin_Prevue
    private _Date_Fin_Prevue: Date | undefined;
    public get Date_Fin_Prevue() {
        return this._Date_Fin_Prevue;
    }
    public set Date_Fin_Prevue(v: Date | undefined) {
        this._Date_Fin_Prevue = v;
    }
    //#endregion

    //#region Acceptation
    private _Acceptation: boolean | undefined;
    public get Acceptation() {
        return this._Acceptation;
    }
    public set Acceptation(v: boolean | undefined) {
        this._Acceptation = v;
    }
    //#endregion


    //#region Date_Debut_Reel
    private _Date_Debut_Reel!: Date;
    public get Date_Debut_Reel(): Date {
        return this._Date_Debut_Reel;
    }
    public set Date_Debut_Reel(value: Date) {
        this._Date_Debut_Reel = value;
    }
    //#endregion

    //#region Date_Fin_Reel
    private _Date_Fin_Reel: Date | undefined;
    public get Date_Fin_Reel() {
        return this._Date_Fin_Reel;
    }
    public set Date_Fin_Reel(v: Date | undefined) {
        this._Date_Fin_Reel = v;
    }
    //#endregion

    //#region Condition_Recuperation
    private _Condition_Recuperation: string | undefined;
    public get Condition_Recuperation() {
        return this._Condition_Recuperation;
    }
    public set Condition_Recuperation(v: string | undefined) {
        this._Condition_Recuperation = v;
    }
    //#endregion

    //#region Condition_Retour
    private _Condition_Retour: string | undefined;
    public get Condition_Retour() {
        return this._Condition_Retour;
    }
    public set Condition_Retour(v: string | undefined) {
        this._Condition_Retour = v;
    }
    //#endregion

//#region Note_Emprunteur
private _Note_Emprunteur: number | undefined;
public get Note_Emprunteur() {
    return this._Note_Emprunteur;
}
public set Note_Emprunteur(v: number | undefined) {
    this._Note_Emprunteur = v;
}
//#endregion

//#region Note_Preteur
private _Note_Preteur: number | undefined;
public get Note_Preteur() {
    return this._Note_Preteur;
}
public set Note_Preteur(v: number | undefined) {
    this._Note_Preteur = v;
}
//#endregion


//#region Commentaire_Emprunteur
private _Commentaire_Emprunteur: string | undefined;
public get Commentaire_Emprunteur() {
    return this._Commentaire_Emprunteur;
}
public set Commentaire_Emprunteur(v: string | undefined) {
    this._Commentaire_Emprunteur = v;
}
//#endregion


//#region Commentaire_Preteur
private _Commentaire_Preteur: string | undefined;
public get Commentaire_Preteur() {
    return this._Commentaire_Preteur;
}
public set Commentaire_Preteur(v: string | undefined) {
    this._Commentaire_Preteur = v;
}
//#endregion




    //#region Id_Objet
        private _Id_Objet!: Guid ;
        public get Id_Objet() {
            return this._Id_Objet;
        }
        public set Id_Objet(v: Guid ) {
            this._Id_Objet = v;
        }
    //#endregion


    //#region Id_Emprunteur
    private _Id_Emprunteur!: Guid ;
    public get Id_Emprunteur() {
        return this._Id_Emprunteur;
    }
    public set Id_Emprunteur(v: Guid ) {
        this._Id_Emprunteur = v;
    }



}

