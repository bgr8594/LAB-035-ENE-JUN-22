import { Component, OnInit } from '@angular/core';
import { Personaje } from '../models/personaje.model';
import { ServicioCService } from '../services/servicio-c.service';

@Component({
  selector: 'app-reciever',
  templateUrl: './reciever.page.html',
  styleUrls: ['./reciever.page.scss'],
})
export class RecieverPage implements OnInit {
  user: any;
  list: any[];
  personajes: Personaje[];
  
  constructor(private servicioCService: ServicioCService) { }

  ngOnInit() {
    this.servicioCService.$getObjectSource.subscribe(data=>{
      console.log(data);
      this.user = data;
    }).unsubscribe();
    this.servicioCService.$getListSource.subscribe(data=>{
      console.log(data);
      this.list = data;
    }).unsubscribe();

    this.servicioCService.getPersonajes().subscribe((response: any)=>{
      this.personajes = response.results;
    });
  }

}
