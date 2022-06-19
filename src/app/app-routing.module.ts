import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashtagMaterialsComponent } from './hashtag-materials/hashtag-materials.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{ path: "", redirectTo: "home", pathMatch: "full" },
  { path: "materials/:name", component: HashtagMaterialsComponent }, 
  { path: "home", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
