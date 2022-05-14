import { Component, OnInit } from '@angular/core';
import { Lugar } from '../models/lugar.model';
import { LugarService } from '../services/lugar.service';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { GooglemapsComponent } from '../googlemaps/googlemaps.component';

@Component({
  selector: 'app-destinos',
  templateUrl: './destinos.page.html',
  styleUrls: ['./destinos.page.scss'],
})
export class DestinosPage implements OnInit {

  lugar: Lugar = new Lugar();
  destinos: any[] = [];
  ionicForm: FormGroup;
  estado: string ="Alta destino";
  editando: boolean= false;
  latitud: number;
  longitud: number;

  constructor(private lugarService: LugarService,
    private formBuilder: FormBuilder, private modalController: ModalController) { }

    ngOnInit() {
      this.buildForm();
      this.lugarService.getLugaresChanges().subscribe(resp => {
        this.destinos = resp.map((e: any) => {
          return {
            id: e.payload.doc.id,
            nombre: e.payload.doc.data().nombre
          }
        });
        console.log(resp);
      }, error => {
        console.error(error);
      });
    }
  
    altaLugar(){
      this.lugarService.altaLugar(this.lugar);
      //this.lugarService.getLugares(this.destinos);
      this.ionicForm.reset();
    }
  
    submitForm(){
      if(this.ionicForm.valid){
        this.lugar.latitud = this.latitud;
        this.lugar.longitud = this.longitud;
        if(!this.editando){
          this.lugar.nombre = this.ionicForm.get('nombre').value;
          this.lugarService.altaLugar(this.lugar).then((e:any)=>{
            this.ionicForm.reset();
          }).catch(e=>{
            console.error(e);
          });        
        } else{
          this.lugar.nombre = this.ionicForm.get('nombre').value;
          this.lugarService.updateLugares(this.lugar.id, this.lugar).then(e=>{
            this.editando= false;
            this.estado = "Alta destino";
            this.lugar = new Lugar();
            this.ionicForm.reset();
          }).catch(e=>{
            console.error(e);
          });
        }
      }
    }
  
    buildForm(){
      this.ionicForm = this.formBuilder.group({
        nombre: new FormControl('',{validators: [Validators.required]})
      });
    }
  
    hasError: any = (controlName: string, errorName: string) => {
      return !this.ionicForm.controls[controlName].valid &&
        this.ionicForm.controls[controlName].hasError(errorName) &&
        this.ionicForm.controls[controlName].touched;
    }
  
    editarLugar(id: any, lugar: any) {
      this.editando = true;
      this.lugar = lugar;
      this.estado = "Editar el lugar";
      this.ionicForm.get('nombre').setValue(lugar.nombre);
    }
  
    eliminarLugar(id: any) {
      this.estado = "Alta destino";
      this.editando = false;
      this.ionicForm.reset();
      this.lugarService.deleteLugar(id);
    }
  
    cancelarEdicion(){
      this.estado = "Alta destino";
      this.editando = false;
      this.ionicForm.reset();
      this.lugar = new Lugar();
    }  
  
    getPosition(): Promise<any> {
      return new Promise((resolve: any, reject: any): any => {
        navigator.geolocation.getCurrentPosition((resp: any) => {
          this.latitud = resp.coords.latitude;
          this.longitud = resp.coords.longitude;
        },
        (err: any) => {
          if ( err.code === 1 ) {
            alert('Favor de activar la geolocalización en tu navegador y recargar la pantalla.');
          }
          this.latitud = null;
          this.longitud = null;
        }, {timeout: 5000, enableHighAccuracy: true });
      });
    }
  
    async addDirection(){
      let positionInput: any = {
        lat: -2.898116,
        lng: -78.99958149999999
      };
      if(this.latitud !== null){
        positionInput.lat = this.latitud;
        positionInput.lng = this.longitud;
      }
  
  
      const modalAdd = await this.modalController.create({
        component: GooglemapsComponent,
        mode: 'ios',
        swipeToClose: true,
        componentProps: {position: positionInput} 
      });
  
      await modalAdd.present();
  
      const {data} = await modalAdd.onWillDismiss();
  
      if(data){
        console.log('data->', data);
        //this.cli
        this.longitud = data.pos.lng;
        this.latitud = data.pos.lat;
        console.log('datos de ubiciacion actualizados, latitud: '+this.latitud+' \nlongitud:'+this.longitud);
      }
    }  
}