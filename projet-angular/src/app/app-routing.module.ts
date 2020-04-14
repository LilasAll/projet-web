import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/auth/auth.guard';
import { PageComponent } from './page/page.component';



const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'annonces', component: AnnonceComponent },

  //path for authentification parts :  
  { path: 'login', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'page', canActivate: [AuthGuard], component: PageComponent },

  //path dashboard admin :
  { path: 'admin', canActivate: [AuthGuard], component: AdminComponent, data: { roles: ['ADMIN']} }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule { }
