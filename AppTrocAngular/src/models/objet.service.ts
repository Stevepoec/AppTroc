
import { Objet } from './objet';
import { SCRUDService } from './scrud.service';

export abstract class ObjetService extends SCRUDService<Objet>{
  //abstract searchItemByYearAsync(year:number):Promise<SearchResult[]>;
}

