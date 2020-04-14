import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { SigninComponent } from './connexion/signin/signin.component';
import { SignupComponent } from './connexion/signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './user/profile/profile.component';
import { EditprofileComponent } from './user/editprofile/editprofile.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { ListComponent } from './user/list/list.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    SigninComponent,
    SignupComponent,
    AdminComponent,
    UserComponent,
    ProfileComponent,
    EditprofileComponent,
    AnnonceComponent,
    ListComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
