import { Component, OnInit } from '@angular/core';
import { Personaje } from '../models/personaje.model';
import { SerciceCService } from '../services/sercice-c.service';

@Component({
  selector: 'app-reciever',
  templateUrl: './reciever.page.html',
  styleUrls: ['./reciever.page.scss'],
})
export class RecieverPage implements OnInit {

  user: any;
  list: any[];
  personajes: Personaje[];

  constructor(private service: SerciceCService) { }

  ngOnInit() {
    this.service.$getObjectSource.subscribe(data=>{
      console.log(data);
      this.user = data;
    }).unsubscribe();
    this.service.$getListSource.subscribe(data=>{
      console.log(data);
      this.list = data;
    }).unsubscribe();

    this.service.getPersonajes().subscribe((response: any)=>{
      this.personajes = response.results;
    });
  }

}