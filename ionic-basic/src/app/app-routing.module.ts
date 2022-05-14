import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'presupuesto',canActivate:[AuthGuard],
    loadChildren: () => import('./presupuesto/presupuesto.module').then( m => m.PresupuestoPageModule)
  },
  {
    path: 'alumnos',canActivate:[AuthGuard],
    loadChildren: () => import('./alumnos/alumnos.module').then( m => m.AlumnosPageModule)
  },
  {
    path: 'inicio',canActivate:[AuthGuard],
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'reciever',canActivate:[AuthGuard],
    loadChildren: () => import('./reciever/reciever.module').then( m => m.RecieverPageModule)
  },
  {
    path: 'receta',canActivate:[AuthGuard],
    loadChildren: () => import('./receta/receta.module').then( m => m.RecetaPageModule)
  },
  {
    path: 'detalle-receta',canActivate:[AuthGuard],
    loadChildren: () => import('./detalle-receta/detalle-receta.module').then( m => m.DetalleRecetaPageModule)
  },
  {
    path: 'tabs',canActivate:[AuthGuard],
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'admin',canActivate:[AuthGuard],
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'destinos', canActivate:[AuthGuard],
    loadChildren: () => import('./destinos/destinos.module').then( m => m.DestinosPageModule)
  },
  {
    path: 'destinos-api', canActivate:[AuthGuard],
    loadChildren: () => import('./destinos-api/destinos-api.module').then( m => m.DestinosApiPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }