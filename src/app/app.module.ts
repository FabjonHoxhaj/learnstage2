import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/'; 
import { AngularFireStorageModule } from '@angular/fire/compat/storage';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HashtagsComponent } from './hashtags/hashtags.component';
import { HashtagMaterialsComponent } from './hashtag-materials/hashtag-materials.component';
import { HomeComponent } from './home/home.component';
import { HamburgerTagComponent } from './hamburger-tag/hamburger-tag.component';


@NgModule({
  declarations: [
    AppComponent,
    HashtagsComponent,
    HashtagMaterialsComponent,
    HomeComponent,
    HamburgerTagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
