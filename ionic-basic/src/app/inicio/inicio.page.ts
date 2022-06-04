import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceCService } from '../services/service-c.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  user = {nombre:'Carlos Celestino', uuid:"nCq0JksM6PSCekecEY1WgS1Tdan1", email:"crystybautista8@gmail.com"};

  list: any[]=
  [
    {nombre:'Carlos Celestino', uuid:"nCq0JksM6PSCekecEY1WgS1Tdan1", email:"crystybautista8@gmail.com"},
    {nombre:'Carlos Cel', uuid:"1nCq0JksM6PSCekecEY1WgS1Tdan1", email:"crystybautista8@gmail.com"},
    {nombre:'Carlos Ceelstino', uuid:"nCq0JksM6PSCekecEY1WgS1Tdan1", email:"crystybautista8@gmail.com"}
  ];

  constructor(private router: Router, private serviceC: ServiceCService) { }

  ngOnInit() {
  }

  gotReceiver(){
    this.serviceC.sendObjectSource(this.user);
    this.serviceC.sendListSource(this.list);
    this.router.navigate(['/reciever']);
  }

}