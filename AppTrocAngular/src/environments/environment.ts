import { ObjetHttpService } from "src/models/objet/objet-http.service";
import { ObjetService } from "src/models/objet/objet.service";
// Les valeurs inscrites dans cette const environment
// Doivent être utilisées en prod
export const environment={
    raisonSociale:"Application de troc",
    serviceUrl:"http://localhost:5117/API",
    providers: [
        {provide: ObjetService, useClass:ObjetHttpService}
      ]
}