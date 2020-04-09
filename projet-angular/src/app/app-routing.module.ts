import { AnnonceComponent } from './annonce/annonce.component';
import { EditprofileComponent } from './user/editprofile/editprofile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './user/profile/profile.component';



const routes: Routes = [
  { path: '', component: LayoutComponent },
  {path: 'editprofil', component: EditprofileComponent},
  {path: 'profil', component: ProfileComponent},
  {path:'annonce', component:AnnonceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
