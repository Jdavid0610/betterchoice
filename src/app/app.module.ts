import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//routing
import { AppRoutingModule } from './app-routing.module';
//components
import { AppComponent } from './app/app.component';
import { PrincipalPageComponent } from './principal-page/principal-page.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
//services
import {AuthService } from "./services/auth/auth.service";
//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalPageComponent,
    AboutComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
