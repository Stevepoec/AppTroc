import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Guid } from "guid-typescript";
import { lastValueFrom } from "rxjs";
import { environment } from "src/environments/environment";
import { SearchResult } from "../objet/search-result";
import { Pret } from "./pret";
import { pretService } from "./pret.service";
import { SearchResultPret } from "./search-result-pret";





@Injectable({
    providedIn: 'root'
  })
  export class PretHttpService implements pretService {
    // Le FilmHttpService a besoin d'un HttpClient pour envoyer les requètes au serveur
    constructor(private httpClient: HttpClient) {
  
    }
    async savePretAsync(item: Pret) {
      var guid = Guid.create();
      var dto = {
        // "id": guid.tostring(),
        // "nu": item.Nom,
        // "pu": item.Prenom,
        // "mu": item.mail,
        // "au": item.adresse,
        // "tu": item.telephone,

        "id":guid.toString(),
        "ddp" : item.Date_Debut_Prevue,
        "dfp" : item.Date_Fin_Prevue,
        "a": item.Acceptation,
        "ddr" : item.Date_Debut_Reel,
        "dfr" : item.Date_Fin_Reel,
        "crec" : item.Condition_Recuperation,
        "cret" : item.Condition_Retour,
        "ne" : item.Note_Emprunteur,
        "ce" : item.Commentaire_Emprunteur,
        "np" : item.Note_Preteur,
        "cp" : item.Commentaire_Preteur,
        "ido" : item.Id_Objet,
        "ide" : item.Id_Emprunteur,
      };
      
      var requete = this.httpClient.post(environment.serviceUrl+"/pret", dto);
      var promesse = lastValueFrom(requete);
      var resultatPromesse = await promesse as boolean;
      return guid;
    }
  
    deletePretAsync(id: Guid): Promise<void> {
      throw new Error('Method not implemented.');
    }
    updatePretAsync(id: Guid, item: Pret): Promise<void> {
      throw new Error('Method not implemented.');
    }
    async getPretAsync(id: Guid): Promise<Pret> {
      var requete = this.httpClient.get(environment.serviceUrl+`/pret/${id.toString()}`);
      var promesse = lastValueFrom(requete);
  
      var dto = await promesse as {id:Guid;
        ddp : Date,
        dfp : Date,
        a: boolean,
        ddr : Date,
        dfr : Date,
        crec : string,
        cret : string,
        ne : number,
        ce : string,
        np : number,
        cp : string,
        ido : Guid,
        ide : Guid };
  
      var resultat = new Pret(dto.ddp);
      resultat.Date_Debut_Prevue = dto.ddp;
      resultat.Date_Fin_Prevue = dto.dfp;
      resultat.Acceptation = dto.a;
      resultat.Date_Debut_Reel = dto.ddr;
      resultat.Date_Fin_Reel = dto.dfr ;
      resultat.Condition_Recuperation = dto.crec ;
      resultat.Condition_Retour = dto.cret ;
      resultat.Note_Emprunteur = dto.ne ;
      resultat.Commentaire_Emprunteur = dto.ce ;
      resultat.Note_Preteur = dto.np ;
      resultat.Commentaire_Preteur = dto.cp ;
      resultat.Id_Objet = dto.ido ;
      resultat.Id_Emprunteur = dto.ide ;

         return resultat;
    }
  
    async searchPretAsync(searchText: string) {
      var requete = this.httpClient.get<SearchResultPret[]>(environment.serviceUrl+"/pret?searchText="+searchText);

      var promesse = lastValueFrom(requete); // Attend que la requète soit terminée
  

      var dtos = await promesse;

      return dtos;
  
    }
   
  
  }
  