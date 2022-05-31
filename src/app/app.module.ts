import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AngularFireModule } from "@angular/fire/compat";
//import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HashtagsComponent } from './hashtags/hashtags.component';
import { HashtagMaterialsComponent } from './hashtag-materials/hashtag-materials.component';
import { HomeComponent } from './home/home.component';
import { AdDirective } from './ad.directive';


@NgModule({
  declarations: [
    AppComponent,
    HashtagsComponent,
    HashtagMaterialsComponent,
    HomeComponent,
    AdDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
