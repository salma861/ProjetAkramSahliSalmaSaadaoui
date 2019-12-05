import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParfumComponent } from './parfum/parfum.component';
import { AccueilComponent } from './accueil/accueil.component';
import { Error404Component } from './error404/error404.component';
import { ListeParfumComponent } from './liste-parfum/liste-parfum.component';
import { ModifierParfumComponent } from './modifier-parfum/modifier-parfum.component';
import { AjouterparfumComponent } from './ajouterparfum/ajouterparfum.component';
import { AuthentificationComponent } from './authentification/authentification.component';


const routes: Routes = [ 
{path:'authentification', component:AuthentificationComponent},
{path:'accueil', component:AccueilComponent},
{path:'listeparfum', component:ListeParfumComponent},
{path:'ajouterparfum', component:AjouterparfumComponent},
{path:'', redirectTo:'authentification', pathMatch:'full'},
{path:'listeparfum/:id', component:ParfumComponent},
{path:'listeparfum/:id/:id', component:ModifierParfumComponent},
{path:'**', component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
