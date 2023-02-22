import { Component } from '@angular/core';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ObjetService } from 'src/models/objet/objet.service';
import { SearchResult } from 'src/models/objet/search-result';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private objetService: ObjetService,
    private router: Router
  ) {

  }

  operationEnCours=false;
  resultats?:SearchResult[];
  messageErreur?:string;


  async recherchernavbar(text:string){
    console.log("coucou mais depuis la navbar");

    this.operationEnCours=true;
    this.messageErreur=undefined;
    this.resultats=undefined;
    try {

      console.log("coucou mais depuis la navbar");

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
     console.log("coucou mais depuis accueil");

  }



}
