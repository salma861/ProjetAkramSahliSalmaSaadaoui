import { Injectable } from '@angular/core';
import { Parfum } from './Parfum' ; 

@Injectable({
  providedIn: 'root'
})
export class ParfumsService { 
  parfum = 
  [ new Parfum ("1","Dior","Sauvage","homme","eau de parfum",100,350,true,450,"10/02/2018","../assets/sauvage.jpg"),
  new Parfum ("2","Dior","Miss Dior","femme","eau de parfum",100,450,false,0,"12/07/2018","../assets/missdior.jpg"),
  new Parfum ("3","Tartine et chocolat","Tartine et chocolat","enfant","eau de parfum",100,150,true,200,"18/08/2018","../assets/tartineetchocolat.jpg"),
  new Parfum ("4","Chanel","Bleu de chanel","homme","eau de parfum",250,150,true,300,"20/12/2018","../assets/bleudechanel.jpg"),
  new Parfum ("5","Paco Rabanne","1 million lucky","homme","eau de parfum",300,125,true,400,"02/01/2019","../assets/1millionlucky.jpg"), 
  new Parfum ("6","Iorgio Armani","SI FIORI","femme","parfum",300,125,false,0,"02/02/2019","../assets/sifiori.jpg"),
  new Parfum ("7","Trésor","Nuit Trésor","femme","eau de parfum",350,100,false,0,"12/02/2019","../assets/nuittrésor.jpg"), 
  new Parfum ("8","Ikks","Ikks","enfant","eau de toilette",100,120,false,0,"12/02/2017","../assets/ikks.jpg")
];
log=['Salma','Akram'];
public check(x:string,y:string):boolean{
  if((this.log[0]==x)&&(this.log[1]==y)  ){
    return true;
  }
  else{
    return false;
  }
}
public getProduitByID(id:string):Parfum
  {
    for(let p of this.parfum)
    {
      if(p.id== id)
      return p;
    }
    return null;
  }
  
  public addProduit(id:string, nommarque:string, nom: string, categorie: string , type:string, taille: number , prix:number , 
    promotion:boolean,prixavantpromo:number, datefabrication:string, image:string )  :boolean
  {
   if(this.getProduitByID(id)==null)
      {this.parfum.push(new Parfum (id,nommarque,nom,categorie,type,taille,prix,promotion,prixavantpromo,datefabrication,image));
        return true;
      }    
      return false;
  }
public Delete(index:number){
  this.parfum.splice(index, 1);
}

public modifier(index:number, categorie: string , type:string, taille: number , prix:number , 
  promotion:boolean,prixavantpromo:number, datefabrication:string, image:string){
    this.parfum[index].categorie=categorie;
    this.parfum[index].type=type;
    this.parfum[index].taille=taille;
    this.parfum[index].prix=prix;
    this.parfum[index].promo=promotion;
    this.parfum[index].prixAvantPromo=prixavantpromo;
    this.parfum[index].datefabrication=datefabrication;
    this.parfum[index].photo=image;
  }
  constructor() { }
}
