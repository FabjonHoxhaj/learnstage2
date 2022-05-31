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
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { HeroJobAdComponent } from './hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { AdService } from './ad.service';


@NgModule({
  declarations: [
    AppComponent,
    HashtagsComponent,
    HashtagMaterialsComponent,
    HomeComponent,
    AdDirective,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  
  providers: [AdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
