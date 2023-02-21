import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { SearchResult } from 'src/models/search-result';

@Component({
  selector: 'app-card-objet',
  templateUrl: './card-objet.component.html',
  styleUrls: ['./card-objet.component.scss']
})

export class CardObjetComponent {

  @Output() 

  searchResultClick=new EventEmitter<SearchResult>(); 
  
  @Input()
  searchResults?:SearchResult[];

  ngOnChanges(changes:SimpleChanges){
    console.log("Changement de searchResults dans list-search-result.component");
    console.log(changes["searchResults"]);

  }


  onSearchResultClick(r:SearchResult){
    this.searchResultClick.emit(r);
    // Pas possible car ce component (list-searc-result) va être utilisé 
    // Pour afficher une liste d'acteurs ou de films ou de factures
    // showFilm();
  }

}

