import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '', 
    pathMatch: 'full',
    redirectTo: 'heroes'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule ),
  },
  {
    path: 'heroes', 
    loadChildren: () => import('./heroes/heroes.module').then(h => h.HeroesModule),
    canLoad: [AuthGuard], 
    canActivate: [AuthGuard]
  },
  {
    path: '404', 
    component: ErrorPageComponent
  }, 
  {
    path: '**',
    pathMatch: 'full', 
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
