import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//routing
import { AppRoutingModule } from './app-routing.module';
//components
import { AppComponent } from './app/app.component';
import { PrincipalPageComponent } from './principal-page/principal-page.component';
import { AboutComponent } from './about/about.component';
//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { RegisterComponent } from './register/register.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
