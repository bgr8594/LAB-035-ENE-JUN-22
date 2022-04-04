import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { servicioCService } from '../services/servicio-c.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  user = {nombre:'Pedro Perez', uuid:"34523452345234523452345", email:"correo@gmail.com"};

  list: any[]=
  [
    {nombre:'Pedro Perez', uuid:"34523452345234523452345", email:"correo@gmail.com"},
    {nombre:'Pedro Perez', uuid:"34523452345234523452345", email:"correo@gmail.com"},
    {nombre:'Pedro Perez', uuid:"34523452345234523452345", email:"correo@gmail.com"}
  ];

  constructor(private router: Router, private serviceC: servicioCService) { }

  ngOnInit() {
  }

  gotReceiver(){
    this.serviceC.sendObjectSource(this.user);
    this.serviceC.sendListSource(this.list);

    this.router.navigate(['/reciever']);
  }

}