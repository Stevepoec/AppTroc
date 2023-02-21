import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ObjetService } from 'src/models/objet.service';
import { SearchResult } from 'src/models/search-result';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss']
})
export class ListCardsComponent {

  

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
