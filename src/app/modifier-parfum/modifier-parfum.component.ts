import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ParfumsService } from '../parfums.service';

@Component({
  selector: 'app-modifier-parfum',
  templateUrl: './modifier-parfum.component.html',
  styleUrls: ['./modifier-parfum.component.css']
})
export class ModifierParfumComponent implements OnInit {
  parfum=[];
  identifiant:string;
  categorie: string="";
  type:string="";
  taille: number=0;
  prix:number=0;
  promotion:boolean=false;
  prixavantpromo:number=0;
  datefabrication:string="";
  image:string="";
  message ="";
  submitted:boolean = false;
  constructor( private activatedRoute:ActivatedRoute , private Parfum:ParfumsService ) { }

  ngOnInit() {
    this.parfum=this.Parfum.parfum;
    this.identifiant = this.activatedRoute.snapshot.params['id'] ;
  }

  onSubmit(f:NgForm,indice:number){
    this.submitted =true;

  if(this.categorie==""){
    this.categorie=this.parfum[indice].categorie;
  }
  if(this.type==""){
    this.type=this.parfum[indice].type;
  }
  if(this.taille==0){
    this.taille=this.parfum[indice].taille;
  }
  if(this.prix==0){
    this.prix=this.parfum[indice].prix;
  }
  if(this.promotion==false){
    this.prixavantpromo=0;
  }
  if(this.datefabrication==""){
    this.datefabrication=this.parfum[indice].datefabrication;
  }
  if(this.image==""){
    this.image=this.parfum[indice].photo;
  }
  this.Parfum.modifier(indice,this.categorie,this.type,this.taille,this.prix,this.promotion,
    this.prixavantpromo,this.datefabrication,this.image);
    if(this.submitted){
      this.message="Votre parfum:" +this.parfum[indice].nom+ " a bien été modifié";
    }
  }
}
