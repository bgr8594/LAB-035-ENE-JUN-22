import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceiverPage } from './receiver.page';

const routes: Routes = [
  {
    path: '',
    component: ReceiverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceiverPageRoutingModule {}
