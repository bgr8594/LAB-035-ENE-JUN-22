import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuElement } from 'src/app/models/menu.model';

@Component({
  selector: 'app-float-menu',
  templateUrl: './float-menu.component.html',
  styleUrls: ['./float-menu.component.scss'],
})
export class FloatMenuComponent implements OnInit {

  datosMenu: MenuElement[] =[
    {nombre: 'home',enlace:'/home',
    icono:'home-outline'},
    {nombre: 'Alumnos',enlace:'/alumnos',
  icono:'school-outline'},
    {nombre: 'Receteas',enlace:'/receta',
    icono:'restaurant-outline'},
    {nombre: 'Presupuesto',enlace:'/presupuesto',
    icono:'cash-outline'},
    {nombre: 'inicio',enlace:'/inicio',
    icono:'navigate-outline'},
    {nombre: 'Tabs',enlace:'/tabs',
    icono:'folder-outline'}
  ];

  constructor(private router: Router) { }

  ngOnInit() {}

  navegar(link: string){
    this.router.navigate([link]);
  }

}