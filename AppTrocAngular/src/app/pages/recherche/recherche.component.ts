import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ObjetService } from 'src/models/objet/objet.service';
import { SearchResult } from 'src/models/objet/search-result';


@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss']
})
export class RechercheComponent  {

  constructor(private objetService: ObjetService, 
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {

  }



  searchResultClick=new EventEmitter<SearchResult>(); // EventEmitter => class représentant un évènement

  operationEnCours=false;
  searchResults?:SearchResult[];
  messageErreur?:string;

  async ngOnInit(){
    let text=this.activatedRoute.snapshot.params["text"];

    this.rechercher(text)
  }

  async rechercher(text:string){

    this.operationEnCours=true;
    this.messageErreur=undefined;
    this.searchResults=undefined;
    try {

      this.searchResults=await this.objetService.searchItemAsync(text);  
      console.log(this.searchResults);
      this.operationEnCours=false
      

    } catch (err) {
      this.messageErreur="Pas bon";
    }

    this.operationEnCours=false;

  }
  

  showObjet(r:SearchResult){
    this.router.navigateByUrl("details-objet/"+r.id);
    console.log("coucou mais depuis list-card");

 }




  ngOnChanges(changes:SimpleChanges){
    console.log("Changement de searchResults dans list-search-result.component");
    console.log(changes["searchResults"]);
   }

  onSearchResultClick(r:SearchResult){
    this.searchResultClick.emit(r);
  }


}
