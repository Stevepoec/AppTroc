import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Objet } from 'src/models/objet';
import { ObjetService } from 'src/models/objet.service';
import { SearchResult } from 'src/models/search-result';


@Component({
  selector: 'app-list-objets',
  templateUrl: './list-objets.component.html',
  styleUrls: ['./list-objets.component.scss']
})


export class ListObjetsComponent {

  constructor(private objetService: ObjetService,
    private router: Router
  ) {

  }


  operationEnCours = false;
  resultats?: Objet;
  messageErreur?: string;


  async afficherListObjet(id : string) {

    this.operationEnCours = true;
    this.messageErreur = undefined;
    this.resultats = undefined;
    try {
      // La recherche des resultats (films correspondant au text)
      // est faite par un service. Pourquoi ?
      // - Pour ne pas encombrer le component avec du code
      // - parce que peut-être d'autres components auront besoin de rechercher des films / text
      // - parce que le service est interchangeable
      this.resultats = await this.objetService.getItemAsync(id);
      console.log(this.resultats);
    } catch (err) {
      this.messageErreur = "Pas bon";
    }

    this.operationEnCours = false;

  }

}

