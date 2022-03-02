import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleRecetaPage } from './detalle-receta.page';

const routes: Routes = [
  {
    path: ':idReceta',
    component: DetalleRecetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleRecetaPageRoutingModule {}
