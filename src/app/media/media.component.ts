import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  toShow:boolean=true

  fShow(){
    this.toShow=!this.toShow
    
    return this.toShow
  }
  constructor() { }

  ngOnInit() {
  }

}
