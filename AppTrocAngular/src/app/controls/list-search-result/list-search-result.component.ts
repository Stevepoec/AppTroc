import { SimpleChanges } from '@angular/core';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchResult } from 'src/models/search-result';

@Component({
  selector: 'app-list-search-result',
  templateUrl: './list-search-result.component.html',
  styleUrls: ['./list-search-result.component.scss']
})
// Objectif de cette classe : afficher une liste de searchResult
// et avertir (event) si un élément searchResult affiché a été clické
export class ListSearchResultComponent {

  @Output() 

  searchResultClick=new EventEmitter<SearchResult>(); // EventEmitter => class représentant un évènement

  // @Input() rend la propriété disponible (setable) à partir de la balise
  // <app-list-search-result [searchResults]="..."></app-list-search-result>
  @Input()
  searchResults?:SearchResult[];

  ngOnChanges(changes:SimpleChanges){
    console.log("Changement de searchResults dans list-search-result.component");
    console.log(changes["searchResults"]);
   }

  onSearchResultClick(r:SearchResult){
    this.searchResultClick.emit(r);
  }
}
