import { Component, OnInit } from '@angular/core';
import { Lugar } from '../models/lugar.model';
import { LugarService } from '../services/lugar.service';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-destinos',
  templateUrl: './destinos.page.html',
  styleUrls: ['./destinos.page.scss'],
})
export class DestinosPage implements OnInit {

  lugar: Lugar = new Lugar();
  destinos: any[] = [];
  ionicForm: FormGroup;

  constructor(private lugarService: LugarService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.buildForm();
      this.lugarService.getLugares(this.destinos);
  }

  altaLugar(){
    this.lugarService.altaLugar(this.lugar);
    this.lugarService.getLugares(this.destinos);
    this.ionicForm.reset();
  }

  submitForm(){
    if(this.ionicForm.valid){
      this.lugar.nombre = this.ionicForm.get('nombre').value;
      this.altaLugar();
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

}