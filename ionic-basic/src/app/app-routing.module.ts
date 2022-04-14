import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    //path: '',
    redirectTo: 'home',
    path: 'home',
    /*loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)*/
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    //path: 'presupuesto',
    path: 'presupuesto',canActivate:[AuthGuard],
    loadChildren: () => import('./presupuesto/presupuesto.module').then( m => m.PresupuestoPageModule)
  },
  {
    //path: 'alumnos',
    path: 'alumnos',canActivate:[AuthGuard],
    loadChildren: () => import('./alumnos/alumnos.module').then( m => m.AlumnosPageModule)
  },
  {
    //path: 'inicio',
    path: 'inicio',canActivate:[AuthGuard],
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    //path: 'reciever',
    path: 'reciever',canActivate:[AuthGuard],
    loadChildren: () => import('./reciever/reciever.module').then( m => m.RecieverPageModule)
  },
  {
    //path: 'receta',
    path: 'receta',canActivate:[AuthGuard],
    loadChildren: () => import('./receta/receta.module').then( m => m.RecetaPageModule)
  },
  {
    //path: 'detalle-receta',
    path: 'detalle-receta',canActivate:[AuthGuard],
    loadChildren: () => import('./detalle-receta/detalle-receta.module').then( m => m.DetalleRecetaPageModule)
  },
  {
    //path: 'tabs',
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
({
  imports: [
RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
//export class AppRoutingModule { }