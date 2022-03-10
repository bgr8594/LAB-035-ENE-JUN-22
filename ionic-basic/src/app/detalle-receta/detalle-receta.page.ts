import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { receta } from '../models/receta.model';
import { RecetasService } from '../services/recetas.service';

@Component({
  selector: 'app-detalle-receta',
  templateUrl: './detalle-receta.page.html',
  styleUrls: ['./detalle-receta.page.scss'],
})
export class DetalleRecetaPage implements OnInit {

  idReceta: number;
  receta: receta;

  constructor(
    private recetaService: RecetasService,
    private router: Router,
    private routerActivate: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routerActivate.paramMap.subscribe(
      paramMap=>{
        this.idReceta = Number.parseInt(paramMap.get('idReceta'));
        this.receta = this.recetaService.getReceta(this.idReceta);
      }
    );
  }

}
