import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DestinosApiPageRoutingModule } from './destinos-api-routing.module';

import { DestinosApiPage } from './destinos-api.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DestinosApiPageRoutingModule
  ],
  declarations: [DestinosApiPage]
})
export class DestinosApiPageModule {}
