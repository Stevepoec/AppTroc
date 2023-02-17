import { Guid } from "guid-typescript";
import { Objet } from "./objet";
import { ObjetService } from "./Objet.service";
import { SearchResult } from "./search-result";

export class ObjetRamService implements ObjetService {
    // Représente les données dans la BDD
    // DAO = Data Access Object
    data :{t:string, d?:number, ds?:Date,c:boolean,id:Guid}[]= [
        { t: "Memento", d: 123, ds: new Date(2000, 8, 7), c: true, id: Guid.create() },
        { t: "L'effet papillon", d: 178, ds: new Date(2004, 2, 10), c: true, id: Guid.create() },
        { t: "The artiste", d: 123, ds: new Date(2011, 9, 12), c: false, id: Guid.create() }
    ] ;
    saveItemAsync(item: Objet): Promise<Guid> {
        var dao={ t:item.Nom_Objet,
                     d:item.duree, 
                     ds:item.dateSortie,
                     c:item.couleur,
                      id:Guid.create()};
        this.data.push(dao);
        return Promise.resolve(dao.id);
    }
    deleteItemAsync(id: Guid): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async updateItemAsync(id: Guid, item: Objet): Promise<void> {
        let o=this.data.find(e=>e.id.equals(id));
        if(!o){
            return Promise.reject(new Error("Objet non trouvé"));
        };
        o.c=item.couleur;
        o.d=item.duree;
        o.ds=item.dateSortie;
        o.t=item.Nom_Objet;
        return Promise.resolve();
    }
    getItemAsync(id: Guid): Promise<Objet> {
        let o=this.data.find(e=>e.id.equals(id));
        if(!o){
            return Promise.reject(new Error("Objet non trouvé"));
        }
        let f=new Objet(o.t);
        f.couleur=o.c;
        f.dateSortie=o.ds;
        f.duree=o.d;
        return Promise.resolve(f);
    }
    async searchItemAsync(searchText: string = ""): Promise<SearchResult[]> {
        // Calcul de la réponse en prenant le tableau de données
        // en le filtrant par rapport au searchText (filter)
        // en les transformant en searchResult
        // Math.random() => un nombre entre 0 et 1 au hasard
        
        // if(Math.random()>0.8){
        //     return Promise.reject(new Error("Ca marche pas"));
        // }

        let reg=new RegExp(searchText,"gi");
         let reponse= this.data   // {t,d,ds,c,id}[]
            // filter = (where en c#) => filtre les éléments du tableau
            .filter(c => reg.test(c.t)) // {t,d,ds,c,id}[]
            .map(c => ({
                    id:c.id,
                    label:c.t,
                    shortDescription:"Sortie : "+(c.ds ? c.ds.getFullYear():""),
                    indication: c.d +" min"
                } as SearchResult));
        //La ligne suivante est l'attente d'un promesse qui dure 5 secondes
        //   await new Promise<void>((resolve,reject)=>{
        //         setTimeout(()=>{
        //             resolve();
        //         },3000);
        //   });
          return reponse;
    }

}

