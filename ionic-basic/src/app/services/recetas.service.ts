import { Injectable } from '@angular/core';
import { Receta } from '../models/receta.model';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  recetas: Receta[]=[
    {
      id: 1, 
      nombre: 'Milanesa de pollo', 
      image: 'https://cdn.recetas360.com/wp-content/uploads/2019/07/Milanesas-de-pollo-al-horno.jpg',
      ingredientes: ["queso"
      , "1 Pechuga de pollo fileteada"
      , "2 Huevos"
      , "300 gramos de Pan rallado"
      , "1/2 cucharadita de Pimienta"
      , "1/2 cucharadita de Sal"]
    },
    {
      id: 2, 
      nombre: 'flautas de pollo', 
      image: 'https://www.mylatinatable.com/wp-content/uploads/2016/03/chicken-flautas.jpg',
      ingredientes: ['1 taza más 2 cucharadas de Aceite de Vegetal GOYA®, divididos',
      '¾ de cebolla amarilla, finamente picada',
      '1 cdta. de Ajo Picado GOYA® o 2 dientes de ajo, finamente picado',
      '1 lata (8 oz.) de Salsa de Tomate',
      '½ taza de agua'
      ]
    },
    {
      id: 3, 
      nombre: 'sandwitch de pollo crispy', 
      image: 'https://www.unileverfoodsolutions.com.mx/dam/global-ufs/mcos/NOLA/calcmenu/recipes/MX-recipes/In-Development/FULL-SAND.png',
      ingredientes: [
        'Milanesa de pollo'
        ,'Harina'
        ,'Huevo'
        ,'Empanizador 1 kg'
        ,'Tocino frito'
        ,'pan de sandwitch'
      ]
    },
    {
      id: 4, 
      nombre: 'pollo con mole', 
      image: 'https://cheforopeza.com.mx/wp-content/uploads/2017/11/pollo-mole.jpg',
      ingredientes: [
        '6 Pieza de pollo'
        ,'2 Pieza de pimienta gord'
        ,'1/2 Taza de Azúcar'
        ,'1/2 Taza de hoja de cilantro'
        ,'5 Pieza de chile ancho'
        ,'3 Pieza de chile guajillo'
        ,'1 Pieza de cebolla'
        ,'1 Pieza de anís estrella'
        ,'1/4 Taza de almendras'
        ,'1 Cucharadas de manteca vegetal'

      ]
    }
  ];

  constructor() { }
  getReceta(idReceta: number){
    return {...this.recetas.find(
      (receta: Receta) =>{
        return receta.id ===idReceta
      }
    )};
  }

  getRecetas(){
    return [...this.recetas];
  }

}