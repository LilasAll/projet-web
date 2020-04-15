
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { AuthService } from './service/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';

import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { AnnonceListComponent } from './annonce/annonce-list/annonce-list.component';
import { UserService } from 'src/service/user.service';


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
    LoginComponent,
    HomeComponent,
    PageComponent,
    UserLoginComponent,
    UserFormComponent,
    AnnonceListComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
