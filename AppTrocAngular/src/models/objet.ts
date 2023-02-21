import { Guid } from "guid-typescript";

export class Objet {
    constructor(Nom_Objet: string) {
        // set du Nom_Objet
        this.Nom_Objet = Nom_Objet;

    }

    //#region Nom_Objet
    private _Nom_Objet!: string;
    public get Nom_Objet(): string {
        return this._Nom_Objet;
    }
    public set Nom_Objet(value: string) {
        this._Nom_Objet = value;
    }
    //#endregion

    //#region Descrition_Longue
    private _Descrition_Longue: string | undefined;
    public get Descrition_Longue() {
        return this._Descrition_Longue;
    }
    public set Descrition_Longue(v: string | undefined) {
        this._Descrition_Longue = v;
    }
    //#endregion

    //#region Description_Courte
    private _Description_Courte: string | undefined;
    public get Description_Courte() {
        return this._Description_Courte;
    }
    public set Description_Courte(v: string | undefined) {
        this._Description_Courte = v;
    }
    //#endregion

    //#region Valeur
    private _Valeur: number | undefined;
    public get Valeur() {
        return this._Valeur;
    }
    public set Valeur(v: number | undefined) {
        this._Valeur = v;
    }
    //#endregion

        //#region Valeur
        private _Id_Proprietaire: Guid | undefined;
        public get Id_Proprietaire() {
            return this._Id_Proprietaire;
        }
        public set Id_Proprietaire(v: Guid | undefined) {
            this._Id_Proprietaire = v;
        }
        //#endregion


}

