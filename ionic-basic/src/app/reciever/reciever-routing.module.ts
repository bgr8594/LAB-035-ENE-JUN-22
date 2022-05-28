import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecieverPage } from './reciever.page';

const routes: Routes = [
  {
    path: '',
    component: RecieverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecieverPageRoutingModule {}