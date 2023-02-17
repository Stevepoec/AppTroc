import { ObjetHttpService } from "src/models/objet-http.service";
import { ObjetService } from "src/models/objet.service";
// Les valeurs inscrites dans cette const environment
// Doivent être utilisées en prod
export const environment={
    raisonSociale:"Application de troc",
    serviceUrl:".",
    providers: [
        {provide: ObjetService, useClass:ObjetHttpService}
      ]
}