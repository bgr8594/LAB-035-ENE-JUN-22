import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DestinosPageRoutingModule } from './destinos-routing.module';

import { DestinosPage } from './destinos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DestinosPageRoutingModule
  ],
  declarations: [DestinosPage]
})
export class DestinosPageModule {}
