import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FootprintsComponent } from './pages/footprints/footprints.component';
import { AboutComponent } from './pages/about/about.component';
import { ContatUsComponent } from './pages/contat-us/contat-us.component';

export const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "projects", component: FootprintsComponent},
  {path: "about", component: AboutComponent},
  {path: "contact", component: ContatUsComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];
