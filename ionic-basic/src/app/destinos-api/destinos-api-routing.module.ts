import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DestinosApiPage } from './destinos-api.page';

const routes: Routes = [
  {
    path: '',
    component: DestinosApiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DestinosApiPageRoutingModule {}