import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { pretService } from 'src/models/pret/pret.service';
import { SearchResultPret } from 'src/models/pret/search-result-pret';

@Component({
  selector: 'app-list-prets',
  templateUrl: './list-prets.component.html',
  styleUrls: ['./list-prets.component.scss']
})
export class ListPretsComponent {

  

  constructor(private pretService: pretService,
    private router: Router
  ) {

  }

  operationEnCours=false;
  resultats?:SearchResultPret[];
  messageErreur?:string;

  async rechercher(text:string){

    this.operationEnCours=true;
    this.messageErreur=undefined;
    this.resultats=undefined;
    try {
      this.resultats=await this.pretService.searchPretAsync(text);  
      console.log(this.resultats);
      console.log("coucouc depuis list-pret");

      this.operationEnCours=false
      

    } catch (err) {
      this.messageErreur="Pas bon";
    }

    this.operationEnCours=false;

  }

  showObjet(r:SearchResultPret){

     this.router.navigateByUrl("details-pret/"+r.id);
  }


}
