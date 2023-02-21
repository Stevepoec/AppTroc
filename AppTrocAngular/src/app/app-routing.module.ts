import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ListObjetsComponent } from './pages/list-objets/list-objets.component';

const routes: Routes = [
    {path:"accueil", component:AccueilComponent},
    {path:"list-objets", component:ListObjetsComponent},

    {path:"**",redirectTo:"accueil"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
