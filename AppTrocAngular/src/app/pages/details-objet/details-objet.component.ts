import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Guid } from 'guid-typescript';
import { appUser } from 'src/models/appUser/appUser';
import { appUserService } from 'src/models/appUser/appUser.service';
import { Objet } from 'src/models/objet/objet';
import { ObjetService } from 'src/models/objet/objet.service';

@Component({
  selector: 'app-details-objet',
  templateUrl: './details-objet.component.html',
  styleUrls: ['./details-objet.component.scss']
})
export class DetailsObjetComponent implements OnInit {

  constructor(private objetService:ObjetService, 
    private appUserService:appUserService,
    private activatedRoute: ActivatedRoute){
  }

  objet?: Objet;
  appUser?: appUser;



  async ngOnInit(){

    console.log("coucou depuis details-objet");

    // PREMIERE INFO
    
    let id=this.activatedRoute.snapshot.params["id"];
    let guid=Guid.parse(id);
    this.objet=await this.objetService.getItemAsync(guid)

    //SECONDE INFO

    let Id_Proprio = this.objet.Id_Proprietaire;
    this.appUser=await this.appUserService.getUserAsync(Id_Proprio);

    //TODO : Faire le AppUser Service AppUser - HttpService

  }

}
