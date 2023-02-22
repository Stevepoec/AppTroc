import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchResult } from 'src/models/objet/search-result';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {

  
  @Output() 
  
  searchResultClick=new EventEmitter<SearchResult>(); 
  
  @Input()
  
  searchResults?:SearchResult[];


  onSearchResultClick(r:SearchResult){
    this.searchResultClick.emit(r);
      console.log("coucou mais depuis accueil");
 
   }
  

}
