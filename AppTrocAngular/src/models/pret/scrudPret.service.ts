import { Guid } from "guid-typescript";
import { SearchResultPret } from "./search-result-pret";

// Desdcription des opérations SCRUD pour un type T
// T peut être n'importe quelle class
export abstract class SCRUDPretService<T> {
    // Sauvegarde un film => opération asynchrone
    // car elle comprend probablement un accès à un serveur distant
    // donc on ne peut garantir la rapidité
     abstract savePretAsync(item:T):Promise<Guid>;  // Create
     abstract deletePretAsync(id:Guid):Promise<void>;  // Delete
     abstract updatePretAsync(id:Guid,item:T):Promise<void>; // Update
     abstract getPretAsync(id:Guid):Promise<T>; // Read
     abstract searchPretAsync(searchText:string):Promise<SearchResultPret[]>; // Search
  }