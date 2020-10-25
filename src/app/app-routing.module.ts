import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component'
import { PrincipalPageComponent } from './principal-page/principal-page.component';
import { AboutComponent } from './about/about.component';

import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {path: 'Ppage', component: PrincipalPageComponent } ,
  {path: 'About', component: AboutComponent },
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
