import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infos-legales',
  templateUrl: './infos-legales.component.html',
  styleUrls: ['./infos-legales.component.scss']
})
export class InfosLegalesComponent implements OnInit {
  toShow:boolean=true

  fShow(){
    this.toShow=!this.toShow
        
    return this.toShow
  }

  infos_gauche:string[]=[
    "Entité Légale*",
    "N° BCE ou TVA*"
  ]

  infos_droite:string[]=[
    "Nom & Prénom représentant*",
    "Téléphone représentant*",
    "Email représentant*"
  ]

  constructor() { }

  ngOnInit() {
  }

}
