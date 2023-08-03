import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterformComponent } from './events/registerform/registerform.component';
import { DetailscardsComponent } from './events/detailscards/detailscards.component';
import { HomecardsComponent } from './events/homecards/homecards.component';
const routes: Routes = [
  { path: '', redirectTo: '/homecards', pathMatch: 'full'},
  { path: 'register', component: RegisterformComponent},
  { path: 'details/:id', component: DetailscardsComponent },
  { path: 'homecards', component: HomecardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
