import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

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
    LayoutComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
    ReactiveFormsModule    
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
