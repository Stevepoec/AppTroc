import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Guid } from "guid-typescript";
import { lastValueFrom } from "rxjs";
import { environment } from "src/environments/environment";
import { SearchResult } from "../objet/search-result";
import { appUser } from "./appUser";
import { appUserService } from "./appUser.service";
import { SearchResultUser } from "./search-result-user";




@Injectable({
    providedIn: 'root'
  })
  export class AppUserHttpService implements appUserService {
    // Le FilmHttpService a besoin d'un HttpClient pour envoyer les requètes au serveur
    constructor(private httpClient: HttpClient) {
  
    }
    async saveUserAsync(item: appUser) {
      var guid = Guid.create();
      var dto = {
        "id": guid.toString(),
        "nu": item.Nom,
        "pu": item.Prenom,
        "mu": item.mail,
        "au": item.adresse,
        "tu": item.telephone,
      };
      
      var requete = this.httpClient.post(environment.serviceUrl+"/appUser", dto);
      var promesse = lastValueFrom(requete);
      var resultatPromesse = await promesse as boolean;
      return guid;
    }
  
    deleteUserAsync(id: Guid): Promise<void> {
      throw new Error('Method not implemented.');
    }
    updateUserAsync(id: Guid, item: appUser): Promise<void> {
      throw new Error('Method not implemented.');
    }
    async getUserAsync(id: Guid): Promise<appUser> {
      var requete = this.httpClient.get(environment.serviceUrl+`/appUser/${id.toString()}`);
      var promesse = lastValueFrom(requete);
  
      var dto = await promesse as { id: string, nu: string, pu: string,mu: string, au: string, tu: string  };
  
      var resultat = new appUser(dto.nu);
      resultat.Prenom = dto.pu;
      resultat.mail = dto.mu;
      resultat.adresse = dto.au;
      resultat.telephone = dto.tu;
      return resultat;
    }
  
    async searchUserAsync(searchText: string) {
      var requete = this.httpClient.get<SearchResultUser[]>(environment.serviceUrl+"/appUser?searchText="+searchText);

      var promesse = lastValueFrom(requete); // Attend que la requète soit terminée
  

      var dtos = await promesse;

      return dtos;
  
    }
  
  
  
    // async searchItemAsync(searchText: string) {
    //   throw new Error('Method not implemented.');
    // }
      // envoyer une requet http au serveur : https://localhost:7282/Film
      // Objet spécialisé : HttpClient dans le module HttpModule
      // Créer er renvoyer des SearchResults à partir des résultats
      // Créaqtion d'un requète http avec verbe GET
      // // var requete = this.httpClient.get<SearchResultDTO[]>(environment.serviceUrl+"/Film?searchText="+searchText);
  
      // Attention à Cors
      // Cross Origin Request Security
      // Par défaut, un server n'accepte que les requètes qui provienne de sa propre origine (domaine)
  
  
      // requete HTTP = observable
      // La commuinication passe par plusieurs étapes dont seule la derniere m'intéresse
      // Connection au serveur
      // Envoi des données
      // Reception des données
      // //var promesse = lastValueFrom(requete); // Attend que la requète soit terminée
  
      // dto qui est fourni par le service
      // Je ne l'utilise pas dans mon app
      // car la structure du dto peu varier
      // d'un service à l'autre ou par maj du service
      // // var dtos = await promesse;
      // transformer mes elements renvoyés par les serveur :
      // {id:string,l:string,i?:string,sd?:string}
      // en SearchResult
      // // var resultats = dtos.map(dto => ({
      // //  id: Guid.parse(dto.id),
      // //  indication: dto.sd,
      // //  label: dto.l,
      // // shortDescription: dto.i
      // // } as SearchResult));
      // // return resultats;
  
    // }
  
  
  }
  