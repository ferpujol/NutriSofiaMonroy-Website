import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LinksComponent } from './pages/links/links.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'links', component: LinksComponent },
];
