import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioCService } from '../services/servicio-c.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  user = {nombre:"Pedro Perez", id:"1", email:"correo@gmail.com"};

  list=
  [
    {nombre:"Juan", id:"1", email:"correo@gmail.com"},
  ];

  constructor(private router: Router,
    private serviceCService: ServicioCService) { }

 ngOnInit() {
  }

  gotReceiver(){
    this.serviceCService.sendObjectSource(this.user);
    this.serviceCService.sendListSource(this.list);
    this.router.navigate(['/reciever']);
    
  }
  
}
