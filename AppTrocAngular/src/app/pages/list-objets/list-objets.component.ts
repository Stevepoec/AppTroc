import { Component } from '@angular/core';

@Component({
  selector: 'app-list-objets',
  templateUrl: './list-objets.component.html',
  styleUrls: ['./list-objets.component.scss']
})
export class ListObjetsComponent {

  constructor(private ObjetService:ObjetService,
    private router:Router

    ){

  }

}
