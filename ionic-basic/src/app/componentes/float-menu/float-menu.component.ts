import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FloatMenuPageRoutingModule } from './float-menu-routing.module';

import { FloatMenuPage } from './float-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FloatMenuPageRoutingModule
  ],
  declarations: [FloatMenuPage]
})
export class FloatMenuPageModule {}
