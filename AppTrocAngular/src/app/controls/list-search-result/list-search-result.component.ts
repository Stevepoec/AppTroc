// import { SimpleChanges } from '@angular/core';
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

  @Output() // Rend cet évènement public

  // déclaration d'évènement

  // un autre morceau de code en dehors de la classe pourra associer un gestionnaire 
  // monInstance.searchResultClick.subscribe((e)=>{ ... code à exécuter    })
  // ou
  // dans un template : <app-list-search-result (searchResultClick)="doSomething($event)" 

  // Le gestionnaire sera exécuté lorsque dans cette classe :
  // this.searchResultClick.emit(data);
  // data est du type SearchResult
  // data est le paramètre passé au gestionnaire
  searchResultClick=new EventEmitter<SearchResult>(); // EventEmitter => class représentant un évènement

  // @Input() rend la propriété disponible (setable) à partir de la balise
  // <app-list-search-result [searchResults]="..."></app-list-search-result>
  @Input()
  searchResults?:SearchResult[];

  // ngOnChanges(changes:SimpleChanges){
  //   console.log("Changement de searchResults dans list-search-result.component");
  //   console.log(changes["searchResults"]);

    // Exécuté automatiquement lorsque la valeur d'un champs / propriété
    // marquée avec @Input est modifiée
    // permet à ce component d'agit en cas de changement
  // }

  onSearchResultClick(r:SearchResult){
    this.searchResultClick.emit(r);
    // Pas possible car ce component (list-search-result) va être utilisé 
    // Pour afficher une liste d'acteurs ou de films ou de factures
    // showFilm();
  }
}
