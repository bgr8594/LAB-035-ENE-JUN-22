import { Component, OnInit } from '@angular/core';
import { Gasto } from '../models/gastos.model';
import { GastosService } from '../services/gastos.service';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.page.html',
  styleUrls: ['./presupuesto.page.scss'],
})
export class PresupuestoPage implements OnInit {

  public gastos: string[]=['Directos', 'Fijos', 'Variables'];
  public selectedValue: any;
  public monto: number;
  public resultados: string;
  public errResultados: string='light';
  public listaGastos: Gasto[] = [];
  public descripcion: string;
  public tipoGasto: string = '';

  constructor(private gastosService: GastosService) { }

  customPopoverOptions: any = {
    header: 'Seleccion de gasts',
    subHeader: 'Seleccione el tipo de gasto',
    message: 'Solo seleccione un tipo de gastos'
  };

  cambioValor(value){
    console.log(value);
  }

  guardar(){
    this.resultados="";
    if (this.monto!=null && this.selectedValue!=null && this.descripcion!=null) {
      this.errResultados = "success";
      this.resultados = 'Gasto seleccionado: ' + this.selectedValue + '\nMonto: ' + this.monto + '\nDescripcion: ' + this.descripcion;
      let gasto: Gasto = {
        descripcion: this.descripcion,
        tipo: this.selectedValue,
        monto: this.monto
      }
      this.gastosService.agregar(gasto);
      this.listaGastos = this.gastosService.getGasto();
    } else {
      this.errResultados="danger";
      this.resultados="No a completado todos los campos del formulario."
    }
  }

  borrarGasto(idGasto: number){
    this.gastosService.borrarGasto(idGasto);
    this.listaGastos = this.gastosService.getGasto();
  }

  ngOnInit() {
  }

}