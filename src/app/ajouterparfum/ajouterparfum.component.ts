import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ParfumsService } from '../parfums.service';

@Component({
  selector: 'app-ajouterparfum',
  templateUrl: './ajouterparfum.component.html',
  styleUrls: ['./ajouterparfum.component.css']
})
export class AjouterparfumComponent implements OnInit {

  constructor( private parfumsService:ParfumsService) { }
  submitted:boolean = false;
  id:string="";
  nommarque:string="";
  categorie:string="";
  type:string="";
  taille:number;
  prix:number;
  promotion:boolean;
  prixavantpromo:number;
  datefabrication:string="";
  image:string="";
  nom:string="";
  message ="";

  ngOnInit() {
  }
  onSubmit(f:NgForm)
  {
    this.submitted =true;

    const ajout = this.parfumsService.addProduit(this.id,this.nommarque,this.nom,this.categorie,
      this.type,this.taille,this.prix,this.promotion,this.prixavantpromo,this.datefabrication,
      this.image);
    if(ajout)
      this.message="Votre nouvelle parfum:" +this.nom+ " a bien été ajouté";
    else
      this.message="Le produit d'id "+ this.id+" existe déjà !";
  }

}
