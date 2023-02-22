import { Guid } from "guid-typescript";
import { SearchResultUser } from "./search-result-user";

// Desdcription des opérations SCRUD pour un type T
// T peut être n'importe quelle class
export abstract class SCRUDAppUserService<T> {
    // Sauvegarde un film => opération asynchrone
    // car elle comprend probablement un accès à un serveur distant
    // donc on ne peut garantir la rapidité
     abstract saveUserAsync(item:T):Promise<Guid>;  // Create
     abstract deleteUserAsync(id:Guid):Promise<void>;  // Delete
     abstract updateUserAsync(id:Guid,item:T):Promise<void>; // Update
     abstract getUserAsync(id:Guid):Promise<T>; // Read
     abstract searchUserAsync(searchText:string):Promise<SearchResultUser[]>; // Search
  }