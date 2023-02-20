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

@NgModule({
  declarations: [
    AppComponent,
    ListObjetsComponent,
    ListSearchResultComponent,
    AccueilComponent,
    LoginComponent
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
