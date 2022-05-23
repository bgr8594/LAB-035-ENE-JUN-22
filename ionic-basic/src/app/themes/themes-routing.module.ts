import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThemesPage } from './themes.page';

const routes: Routes = [
  {
    path: '',
    component: ThemesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemesPageRoutingModule {}
