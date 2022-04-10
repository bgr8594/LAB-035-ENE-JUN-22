import { Injectable } from '@angular/core';
import { Receta } from '../models/receta.model';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  recetas: Receta[]=[
    {
      id: 1, 
      nombre: 'Pan de nuez', 
      image: 'https://static.wixstatic.com/media/a19b94_db5a6fbb992c4936bcb09e6669b71df3~mv2.jpg/v1/fit/w_630%2Ch_418%2Cal_c%2Cq_80/file.jpg',
      ingredientes: ['4 tazas (480 g) harina de trigo',
      '2 cucharaditas polvo para hornear',
      '200 ml aceite o mantequilla derretida (yo use aceite)',
      '1 taza(240ml) leche',
      '100 g o al gusto nuez',
      '1 pizca sal',
      '5 huevos',
      '300 grs azúcar',
      '2-3 cucharadas vainilla',]
    },
    {
      id: 2, 
      nombre: 'Spaghetti', 
      image: 'https://images.aws.nestle.recipes/resized/21236E76-811C-6377-B9D8-FF0000673B69-610x360-b-min_1200_600.png',
      ingredientes: ['2 l de agua',
      '300 g de espagueti',
      '90 g de mantequilla sin sal',
      '½ de cucharadita de ajo picado finamente',
      '½ cucharadita de sal',
      '200 g de queso fresco desmoronado']
    },
    {
      id: 3, 
      nombre: 'Coctel de Camaron', 
      image: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/01/coctelcamarones.jpg',
      ingredientes: [
        '4 Porciones',
        'Seleccionar todos los ingredientes',
        '2 jitomates',
        '1/2 cebollas',
        '2 chiles serranos',
        '1/2 manojos de cilantro fresco',
        '2 tazas de catsup',
        '1/2 tazas de jugo de tomate con almejas',
        '2 cucharaditas de aceite de oliva',
        '3 tazas de camarón, precocido',
        'al gusto de aguacate, para acompañar',
        'al gusto de galleta salada, para acompañar',
        'al gusto de limón, para acompañar',
      ]
    },
    {
      id: 4, 
      nombre: 'Torta Cubana', 
      image: 'https://cdn7.kiwilimon.com/recetaimagen/28651/28806.jpg',
      ingredientes: [
        '12 rebanadas Pierna de Cerdo',
        '8 rebanadas Jamón', 
        '12 Salchichas en cuartos a lo largo',
        '8 rebanadas Queso Amarillo',
        '200 g Queso Oaxaca deshebrado', 
        '1 taza Frijol Bayo refritos', 
        '1/2 taza Mayonesa',
        '4 Telera grande, abiertas por la mitad', 
        '4 cucharadas Mantequilla', 
        '2 Aguacates en rebanadas', 
        '2 jitomates en medias lunas',
        '1/4 Cebolla', 
        '1/2 taza Chile Chipotle adobados'
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