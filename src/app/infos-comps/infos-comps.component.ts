import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infos-comps',
  templateUrl: './infos-comps.component.html',
  styleUrls: ['./infos-comps.component.scss']
})
export class InfosCompsComponent implements OnInit {
  toShow:boolean=true

  fShow(){
    this.toShow=!this.toShow
    
    return this.toShow
  }

  jours:string[]=[
    "Lu",
    "Ma",
    "Me",
    "Je",
    "Ve",
    "Sa",
    "Di"
  ]

  //j'ai utilisé ces deux fonctions poour lancer l'alerte du dépassement de caractère.
  comsLimit(limit){
    let value=document.getElementById("#Commentaires")[0].value
    
    if (value.length==limit){
      alert("Vous dépassez la limite de caractère sautorisée")
    }
  }

  CTALimit(limit){
    let value=document.getElementById("#BoutonCTA")[0].value
    
    if (value.length==limit){
      alert("Vous dépassez la limite de caractère sautorisée")
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
