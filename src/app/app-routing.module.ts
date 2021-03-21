import { AuthGuard } from './core/guard/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {path:'', redirectTo: 'auth', pathMatch:'full'},
  {path:'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'components', canActivate: [AuthGuard], loadChildren: () => import('./modules/components/components.module').then(m => m.ComponentsModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
