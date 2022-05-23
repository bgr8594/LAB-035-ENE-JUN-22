import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GooglemapsPage } from './googlemaps.page';

const routes: Routes = [
  {
    path: '',
    component: GooglemapsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GooglemapsPageRoutingModule {}
