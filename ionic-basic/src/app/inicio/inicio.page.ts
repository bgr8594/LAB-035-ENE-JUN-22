import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioCService } from '../services/servicio-c.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  user = {nombre:'francisco Gonzalez',
  uuid:"23564151610564654516486",
  email: 'javier.671634@gmail.com'};

  list: any[] = [
    {nombre:'francisco Gonzalez', uuid:"23564151610564654516486", email: 'javier.671634@gmail.com'},
    {nombre:'francisco Encinas', uuid:"23564151610564654516486", email: 'javier.671634@gmail.com'},
    {nombre:'francisco Javier', uuid:"23564151610564654516486", email: 'javier.671634@gmail.com'}
  ];

  constructor(
    private router: Router,
    private serviceCService: ServicioCService
  ) { }

  ngOnInit() {
  }

  gotReceiver(){
    this.serviceCService.sendObjectSource(this.user);
    this.serviceCService.sendListSource(this.list);
    this.router.navigate(['/reciever']);
  }
}
