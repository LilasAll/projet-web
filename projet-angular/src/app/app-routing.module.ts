
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserComponent } from './user/user.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/auth/auth.guard';
import { PageComponent } from './page/page.component';
import { ProfileComponent } from './user/profile/profile.component';
import { EditprofileComponent } from './user/editprofile/editprofile.component';
import { AnnonceFormComponent } from './annonce/annonce-form/annonce-form.component';




const routes: Routes = [

  { path: '', component: HomeComponent },

  { path: 'annonces', component: AnnonceComponent },
  //path for annonceform par Antoine
  { path: 'annoncesForm', component: AnnonceFormComponent },

  //path for authentification parts :  
  { path: 'login', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'page', canActivate: [AuthGuard], component: PageComponent },

  //path dashboard admin :
  { path: 'admin', canActivate: [AuthGuard], component: AdminComponent, data: { roles: ['ADMIN']} },

  //path user add : 
  { path: 'user', component: UserComponent, children: [
    {path:'signup', component: UserFormComponent},
    {path:'edit/:index', component: UserFormComponent}
  ]},

  //profil user par bento
  {path: 'editprofil', component: EditprofileComponent},
  {path: 'profil', component: ProfileComponent},
  {path:'annonce', component:AnnonceComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule { }
