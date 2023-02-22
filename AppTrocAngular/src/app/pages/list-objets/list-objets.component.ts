import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Objet } from 'src/models/objet/objet';
import { ObjetService } from 'src/models/objet/objet.service';
import { SearchResult } from 'src/models/objet/search-result';


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

    this.operationEnCours=true;
    this.messageErreur=undefined;
    this.resultats=undefined;
    try {
      this.resultats=await this.objetService.searchItemAsync(text);  
      console.log(this.resultats);
      this.operationEnCours=false
      

    } catch (err) {
      this.messageErreur="Pas bon";
    }

    this.operationEnCours=false;

  }

  showObjet(r:SearchResult){

     this.router.navigateByUrl("details-objet/"+r.id);
  }



}
