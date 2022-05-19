import { Router } from '@angular/router';
import { MenuElement } from './../../models/menu.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-float-menu',
  templateUrl: './float-menu.component.html',
  styleUrls: ['./float-menu.component.scss'],
})
export class FloatMenuComponent implements OnInit {

  datosMenu: MenuElement[] = [
    {
      nombre: 'Home',
      enlace: '/home',
      icono: 'home-outline'
    }
    ,
    {
      nombre: 'Alumnos',
      enlace: '/alumnos',
      icono: 'school-outline'
    }
    ,
    {
      nombre: 'Recetas',
      enlace: '/receta',
      icono: 'restaurant-outline'
    }
    ,
    {
      nombre: 'Presupuesto',
      enlace: '/presupuesto',
      icono: 'cash-outline'
    }
    ,
    {
      nombre: 'Inicio',
      enlace: '/inicio',
      icono: 'navigate-outline'
    }
    ,
    {
      nombre: 'Tabs',
      enlace: '/tabs',
      icono: 'folder-outline'
    }
    ,
    {
      nombre: 'login',
      enlace: '/login',
      icono: 'folder-outline'
    }
    ,
    {
      nombre: 'Turismo',
      enlace:'/destinos',
      icono:'airplane'
    }
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  navegar(link: string){
    this.router.navigate([link]);
  }

}