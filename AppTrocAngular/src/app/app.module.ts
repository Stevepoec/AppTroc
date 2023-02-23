import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { LoginComponent } from './pages/login/login.component';
import { environment } from 'src/environments/environment';
import { ListObjetsComponent } from './pages/list-objets/list-objets.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListSearchResultComponent } from './controls/list-search-result/list-search-result.component';
import { CardObjetComponent } from './controls/card-objet/card-objet.component';
import { ListCardsComponent } from './controls/list-cards/list-cards.component';
import { DetailsObjetComponent } from './pages/details-objet/details-objet.component';
import { NavbarComponent } from './controls/navbar/navbar.component';
import { RechercheComponent } from './pages/recherche/recherche.component';
 
@NgModule({
  declarations: [
    AppComponent,
    ListObjetsComponent,
    ListSearchResultComponent,
    AccueilComponent,
    LoginComponent,
    CardObjetComponent,
    ListCardsComponent,
    DetailsObjetComponent,
    NavbarComponent,
    RechercheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: environment.providers,
  bootstrap: [AppComponent]
})
export class AppModule { }
