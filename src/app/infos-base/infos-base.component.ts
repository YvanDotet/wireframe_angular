import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infos-base',
  templateUrl: './infos-base.component.html',
  styleUrls: ['./infos-base.component.scss']
})
export class InfosBaseComponent implements OnInit {
  toShow:boolean=true
  //fShow est une fonction me permettant d'utiliser la directive *ngIf
  
  fShow(){
    this.toShow=!this.toShow;
    
    return this.toShow
  }
  
  infos:string[]=[
    "Nom Commercial*",
    "Adresse Commerciale*",
    "Code Postal*",
    "Ville*",
    "Téléphone*",
    "Portable",
    "Fax",
    "Email",
    "Site Web",
    "Nom & Prénom Contact*"
  ]

  constructor() { }

  ngOnInit() {    
  }

}
