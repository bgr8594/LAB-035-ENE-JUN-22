import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DestinosPage } from './destinos.page';

const routes: Routes = [
  {
    path: '',
    component: DestinosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DestinosPageRoutingModule {}
