import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfosBaseComponent } from './infos-base/infos-base.component';
import { InfosCompsComponent } from './infos-comps/infos-comps.component';
import { MediaComponent } from './media/media.component';
import { InfosLegalesComponent } from './infos-legales/infos-legales.component';
import { NavigationComponent } from './navigation/navigation.component';



@NgModule({
  declarations: [
    AppComponent,
    InfosBaseComponent,
    InfosCompsComponent,
    MediaComponent,
    InfosLegalesComponent,
    NavigationComponent
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
