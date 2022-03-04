import { Component, OnInit } from '@angular/core';
import { Receta } from '../models/receta.model';
import { RecetasService } from '../services/recetas.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.page.html',
  styleUrls: ['./receta.page.scss'],
})
export class RecetaPage implements OnInit {

  recetas: Receta[];

  constructor(private recetaService: RecetasService) { }

  ngOnInit() {
    this.recetas = this.recetaService.getRecetas();
  }

}