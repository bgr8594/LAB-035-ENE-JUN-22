import { RecetasService } from './../services/recetas.service';
import { Component, OnInit } from '@angular/core';
import { receta } from '../models/receta.model';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.page.html',
  styleUrls: ['./receta.page.scss'],
})
export class RecetaPage implements OnInit {

  recetas: receta[];

  constructor(private recetaService: RecetasService) { }

  ngOnInit() {
    this.recetas = this.recetaService.getRecetas();
  }

}
