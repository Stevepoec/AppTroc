import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { interval, lastValueFrom, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Objet } from './objet';
import { ObjetService } from './objet.service';
import { SearchResult } from './search-result';

@Injectable({
  providedIn: 'root'
})
export class ObjetHttpService implements ObjetService {
  // Le FilmHttpService a besoin d'un HttpClient pour envoyer les requètes au serveur
  constructor(private httpClient: HttpClient) {

  }
  async saveItemAsync(item: Objet) {
    var guid = Guid.create();
    var dto = {
      "id": guid.toString(),
      "no": item.Nom_Objet,
      "dc": item.Description_Courte,
      "dl": item.Descrition_Longue,
      "v": item.Valeur,
    };
    var requete = this.httpClient.post(environment.serviceUrl+"/Objet", dto);
    var promesse = lastValueFrom(requete);
    var resultatPromesse = await promesse as boolean;
    return guid;
  }
  deleteItemAsync(id: Guid): Promise<void> {
    throw new Error('Method not implemented.');
  }
  updateItemAsync(id: Guid, item: Objet): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async getItemAsync(id: Guid): Promise<Objet> {
    var requete = this.httpClient.get(environment.serviceUrl+`/Objet/${id.toString()}`);
    var promesse = lastValueFrom(requete);

    var dto = await promesse as { id: string, t: string, c: boolean, d: number, ds: string };

    var resultat = new Objet(dto.t);
    resultat.couleur = dto.c;
    resultat.duree = dto.d;
    resultat.dateSortie = new Date(dto.ds); // Attention : Le serveur m'envoie une chaine => date
    return resultat;
  }
  async searchItemAsync(searchText: string) {
    // envoyer une requet http au serveur : https://localhost:7282/Film
    // Objet spécialisé : HttpClient dans le module HttpModule
    // Créer er renvoyer des SearchResults à partir des résultats
    // Créaqtion d'un requète http avec verbe GET
    var requete = this.httpClient.get<SearchResultDTO[]>(environment.serviceUrl+"/Film?searchText="+searchText);

    // Attention à Cors
    // Cross Origin Request Security
    // Par défaut, un server n'accepte que les requètes qui provienne de sa propre origine (domaine)


    // requete HTTP = observable
    // La commuinication passe par plusieurs étapes dont seule la derniere m'intéresse
    // Connection au serveur
    // Envoi des données
    // Reception des données
    var promesse = lastValueFrom(requete); // Attend que la requète soit terminée

    // dto qui est fourni par le service
    // Je ne l'utilise pas dans mon app
    // car la structure du dto peu varier
    // d'un service à l'autre ou par maj du service
    var dtos = await promesse;
    // transformer mes elements renvoyés par les serveur :
    // {id:string,l:string,i?:string,sd?:string}
    // en SearchResult
    var resultats = dtos.map(dto => ({
      id: Guid.parse(dto.id),
      indication: dto.sd,
      label: dto.l,
      shortDescription: dto.i
    } as SearchResult));
    return resultats;

  }


}
