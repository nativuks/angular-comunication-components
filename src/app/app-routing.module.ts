import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {AppComponent} from './app.component';
import {ComunnicationComponent} from './comunnication/comunnication.component';

const routes: Routes = [

  { path: 'navbar', component: ComunnicationComponent},
  { path: 'observer', component: ComunnicationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
