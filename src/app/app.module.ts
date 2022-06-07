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

import { UploadFormComponent } from './components/upload-form/upload-form.component';
import { UploadListComponent } from './components/upload-list/upload-list.component';
import { UploadDetailsComponent } from './components/upload-details/upload-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HashtagsComponent,
    HashtagMaterialsComponent,
    HomeComponent,
    UploadFormComponent,
    UploadListComponent,
    UploadDetailsComponent
    
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
