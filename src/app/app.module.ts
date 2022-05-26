import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AngularFireModule } from "@angular/fire/compat";
//import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment),
    AngularFirestoreModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
