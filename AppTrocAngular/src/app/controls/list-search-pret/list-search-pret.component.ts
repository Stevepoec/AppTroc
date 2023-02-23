import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { SearchResult } from 'src/models/objet/search-result';
import { SearchResultPret } from 'src/models/pret/search-result-pret';

@Component({
  selector: 'app-list-search-pret',
  templateUrl: './list-search-pret.component.html',
  styleUrls: ['./list-search-pret.component.scss']
})
export class ListSearchPretComponent {

  @Output() 

  searchResultClick=new EventEmitter<SearchResultPret>(); // EventEmitter => class représentant un évènement

  // @Input() rend la propriété disponible (setable) à partir de la balise
  // <app-list-search-result [searchResults]="..."></app-list-search-result>
  @Input()
  SearchResultPret?:SearchResultPret[];

  ngOnChanges(changes:SimpleChanges){
    console.log("Changement de searchResults dans list-search-result.component");
    console.log(changes["searchResults"]);
   }

  onSearchResultClick(r:SearchResultPret){
    this.searchResultClick.emit(r);
  }

}
