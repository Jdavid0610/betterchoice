import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//routing
import { AppRoutingModule } from './app-routing.module';
//components
import { BuildsComponent } from './components/builds/builds.component';
import { SupportComponent } from './components/support/support.component';
import { HardwareGeneralComponent } from './components/hardware-general/hardware-general.component';
import { HardwarePCComponent } from './components/hardware-pc/hardware-pc.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AppComponent } from './app/app.component';
import { PrincipalPageComponent } from './components/principal-page/principal-page.component';
import { AboutComponent } from './components/about/about.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
//services
import {AuthService } from "./services/auth/auth.service";
import {ConexionService} from "./services/conexion/conexion.service";
//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { PrincipalNavComponent } from './components/principal-nav/principal-nav.component';




@NgModule({
  declarations: [
    AppComponent,
    PrincipalPageComponent,
    AboutComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    BuildsComponent,
    SupportComponent,
    HardwareGeneralComponent,
    HardwarePCComponent,
    ProfileComponent,
    PrincipalNavComponent,
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
    ConexionService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
