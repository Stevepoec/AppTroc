export class appUser {
    constructor(Nom: string) {
        // set du Nom_Objet
        this.Nom = Nom;

    }

    //#region Nom_Objet
    private _Nom!: string;
    public get Nom(): string {
        return this._Nom;
    }
    public set Nom(value: string) {
        this._Nom = value;
    }
    //#endregion

    //#region Descrition_Longue
    private _Prenom: string | undefined;
    public get Prenom() {
        return this._Prenom;
    }
    public set Prenom(v: string | undefined) {
        this._Prenom = v;
    }
    //#endregion

        //#region Descrition_Longue
        private _mail: string | undefined;
        public get mail() {
            return this._mail;
        }
        public set mail(v: string | undefined) {
            this._mail = v;
        }
        //#endregion

        
        private _adresse : string | undefined;
        public get adresse() {
            return this._adresse;
        }
        public set adresse(v: string | undefined) {
            this._adresse = v;
        }
        
        private _telephone : string | undefined;
        public get telephone() {
            return this._telephone;
        }
        public set telephone(v: string | undefined) {
            this._telephone = v;
        }
      


}

