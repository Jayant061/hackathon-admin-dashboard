import { Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { CreateHackathonComponent } from './core/components/create-hackathon/create-hackathon.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path:"create-hackathon",
    component:CreateHackathonComponent
  }
];
