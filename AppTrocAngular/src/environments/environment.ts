import { AppUserHttpService } from "src/models/appUser/appUser-http.service";
import { appUserService } from "src/models/appUser/appUser.service";
import { ObjetHttpService } from "src/models/objet/objet-http.service";
import { ObjetService } from "src/models/objet/objet.service";
import { PretHttpService } from "src/models/pret/pret-http.service";
import { pretService } from "src/models/pret/pret.service";
// Les valeurs inscrites dans cette const environment
// Doivent être utilisées en prod
export const environment={
    raisonSociale:"Application de troc",
    serviceUrl:"http://localhost:5117/API",
    providers: [
        {provide: ObjetService, useClass:ObjetHttpService},
        {provide: appUserService, useClass:AppUserHttpService},
        {provide: pretService, useClass:PretHttpService}
      ]
}