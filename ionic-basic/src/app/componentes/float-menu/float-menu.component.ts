import { AuthGuard } from '../../guards/auth.guard';
import { Router } from '@angular/router';
import { Menu } from '../../models/menu.model';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-float-menu',
  templateUrl: './float-menu.component.html',
  styleUrls: ['./float-menu.component.scss'],
})
export class FloatMenuComponent implements OnInit {

  datosMenu: Menu[] =[
    {nombre: 'login',enlace:'/login',
    icono:'log-in-outline'},
    {nombre: 'logout',enlace:'/home',
    icono:'log-out-outline'}
  ];

  constructor(
    private router: Router,
    private authGuard: AuthGuard,
    private menuService: MenuService,
    private afAuth: AngularFireAuth
  ) { }

    titleMenu: string = 'Home';
    public isLoged: any = false;

  ngOnInit() {
    this.afAuth.authState.subscribe(user => this.isLoged= user);

    this.menuService.$getTitleMenu.subscribe(data=>{
      console.log(data);
      this.titleMenu =data;
    });
  }

  navegar(link: string, titleMenu: string) {
    this.titleMenu = titleMenu;
    this.router.navigate([link]);
  }

  onMenuOpen(){
    if(this.isLoged){
      this.datosMenu =[
        {nombre: 'Alumnos',enlace:'/alumnos',
  icono:'school-outline'},
    {nombre: 'Receteas',enlace:'/receta',
    icono:'restaurant-outline'},
    {nombre: 'inicio',enlace:'/inicio',
    icono:'navigate-outline'},
    {nombre: 'Turismo firebase',enlace:'/destinos',
    icono:'airplane'},
    {nombre: 'Tabs',enlace:'/tabs',
    icono:'folder-outline'},
    {nombre: 'Turismo',enlace:'/destinos',
    icono:'airplane'},
    {nombre: 'login',enlace:'/login',
    icono:'log-in-outline'},
        {nombre: 'logout',enlace:'/home',
        icono:'log-out-outline'}
      ];

    } else{
      this.datosMenu =[
        {nombre: 'login',enlace:'/login',
        icono:'log-in-outline'},
        {nombre: 'logout',enlace:'/home',
        icono:'log-out-outline'}
      ];
    }
  }

}