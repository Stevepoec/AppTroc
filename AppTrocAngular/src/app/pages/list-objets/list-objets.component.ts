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

  operationEnCours=false;
  resultats?:SearchResult[];
  messageErreur?:string;

  async rechercher(text:string){

    // var b=new HTMLButtonElement();
    // b.addEventListener("click",()=>{

    // })


    // Je lance l'opération asynchrone
    // Cas 1 => Opération en cours de réalisation
    // Cas 2 => tout se passe bien => affichage des résultats
    // Cas 3 => erreur de l'opération => affichage message erreur
    this.operationEnCours=true;
    this.messageErreur=undefined;
    this.resultats=undefined;
    try {
      // La recherche des resultats (films correspondant au text)
      // est faite par un service. Pourquoi ?
      // - Pour ne pas encombrer le component avec du code
      // - parce que peut-être d'autres components auront besoin de rechercher des films / text
      // - parce que le service est interchangeable

  

      
      this.resultats=await this.objetService.searchItemAsync(text);  
      console.log(this.resultats);
      this.operationEnCours=false
      

    } catch (err) {
      this.messageErreur="Pas bon";
    }

    this.operationEnCours=false;

  }

  // Permet à l'utilisateur de voir le film clické
  showObjet(r:SearchResult){
    // Le router permet de naviguer vers le détail d'un film
    // le r (SearchResult) contient l'id
     this.router.navigateByUrl("edit-objet/"+r.id);
  }



}
