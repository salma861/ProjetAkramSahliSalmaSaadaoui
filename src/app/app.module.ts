import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeParfumComponent } from './liste-parfum/liste-parfum.component';
import { MenuComponent } from './menu/menu.component';
import { ParfumComponent } from './parfum/parfum.component';
import { AccueilComponent } from './accueil/accueil.component';
import { Error404Component } from './error404/error404.component';
import { ModifierParfumComponent } from './modifier-parfum/modifier-parfum.component';
import { AjouterparfumComponent } from './ajouterparfum/ajouterparfum.component';
import { MonpipePipe } from './monpipe.pipe';
import { AuthentificationComponent } from './authentification/authentification.component';


@NgModule({
  declarations: [
    AppComponent,
    ListeParfumComponent,
    ParfumComponent,
    MenuComponent,
    AccueilComponent,
    Error404Component,
    ModifierParfumComponent,
    AjouterparfumComponent,
    MonpipePipe,
    AuthentificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
