import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatMenuComponent } from './float-menu/float-menu.component';



@NgModule({
  declarations: [FloatMenuComponent],
  exports: [FloatMenuComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentesModule { }
