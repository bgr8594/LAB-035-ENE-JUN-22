import { NumberFormatStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.page.html',
  styleUrls: ['./presupuesto.page.scss'],
})
export class PresupuestoPage implements OnInit {

  public gastos: string[]=['Directos','fijos','variables'];
  public selectvalue: any;
  public monto: Number;
  public resultados: string;
  public errResultados: string='light';

  constructor() { }

  
  ngOnInit() {
  }

}
