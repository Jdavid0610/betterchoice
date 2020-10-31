import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components
import { PrincipalPageComponent } from './components/principal-page/principal-page.component';
import { BuildsComponent } from './components/builds/builds.component';
import { SupportComponent } from './components/support/support.component';
import { HardwareGeneralComponent } from './components/hardware-general/hardware-general.component';
import { HardwarePCComponent } from './components/hardware-pc/hardware-pc.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
//httpclient
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: '/Ppage', pathMatch: 'full' },
  { path: 'Ppage', component: PrincipalPageComponent } ,
  { path: 'About', component: AboutComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'builds', component: BuildsComponent},
  { path: 'hwgeneral', component: HardwareGeneralComponent},
  { path: 'hwpc', component: HardwarePCComponent},
  { path: 'support', component: SupportComponent},
  { path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
