import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SecondComponent } from './second/second.component';
import { AuthGuard } from './auth.guard';
import { SignupComponent } from './signup/signup.component';
import { PatComponent } from './pat/pat.component';

const routes: Routes = [
  // {path:'', redirectTo :'', pathMatch:'full'},
  {path:'**', redirectTo :'home'},
  {path: 'signup',component:SignupComponent},
  {path: 'pat',component:PatComponent},
  {path: 'login', component:LoginComponent},
  {path: 'products', component:SecondComponent, canActivate: [AuthGuard]},
  {path: 'profile/:id', component:ProfileComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
