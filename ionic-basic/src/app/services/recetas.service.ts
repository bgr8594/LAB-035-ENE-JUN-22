import { Injectable } from '@angular/core';
import { receta } from '../models/receta.model';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  recetas: receta[] = [
    {
      id : 1,
      nombre : "Champiñones de queso y jamon",
      image : "https://www.divinacocina.es/wp-content/uploads/2021/08/CHAMPINONES-RELLENOS-JAMON-QUESO.jpg.webp",
      ingredientes : [
        "12 Champiñones grandes",
        "2 dientes de ajo",
        "75 gr. de jamon en taquitos muy pequeños",
        "75 gr. de queso rallado",
        "perejil picado",
        "Aceite de oliva",
        "Sal",
        "pimienta"
      ]
    },
    {
      id : 2,
      nombre : "San jacobos de papas, jamon y queso",
      image : "https://www.divinacocina.es/wp-content/uploads/2022/02/san-jacobos-patata-c3.jpg.webp",
      ingredientes : [
        "papas para freir o coser",
        "lonchas de jamon cosido o jamon serrano",
        "lonchas de queso",
        "huevo",
        "harina para empanizar",
        "pan molido",
        "aceite para freir"
      ]
    },
    {
      id : 3,
      nombre : "Postre light de queso y yogurt",
      image : "https://www.divinacocina.es/wp-content/uploads/2016/01/POSTRE-LIGHT-QUESO-YOGUR-4.jpg.webp",
      ingredientes : [
        "250 gr. de queso crema de untar descremado",
        "2 yogures naturales desnatados",
        "2 cucharaditas de endulcolorante granulado",
        "fruta fresca o fruta que conserva su jugo, sin azucares añadidos"
      ]
    }
  ];

  constructor() { }

  getReceta(idReceta: number){
    return {...this.recetas.find(
      (receta: receta)=>{
        return receta.id === idReceta
      }
      )};
  }

  getRecetas(){
    return [...this.recetas];
  }
}
