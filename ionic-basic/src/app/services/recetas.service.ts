import { Injectable } from '@angular/core';
import { Receta } from '../models/receta.model';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  recetas: Receta[]=[
    {
      id: 1, 
      nombre: 'Onigiri de salmon', 
      image: 'https://s1.eestatic.com/2017/05/02/cocinillas/cocinillas_212990784_135196757_1706x960.jpg',
      ingredientes: ["2 vasos de arroz de grano corto especial para sushi",
      "450 ml de agua", 
      "salmon", "alga nori"]
    },
    {
      id: 2, 
      nombre: 'Curry japones con pollo', 
      image: 'https://i2.wp.com/www.kwanhomsai.com/wp-content/uploads/2020/05/Curry-japone%CC%81s-con-pollo1.jpg?resize=1024%2C683',
      ingredientes: [
      '400 g. de contramuslo de pollo',
      '½ paquete de curry japonés',
      '2 hojas de laurel (opcional)',
      '1 cebolla mediana',
      '2 patatas medianas (unos 400 g.)',
      '2 zanahorias ( unos 250 g.)',
      '2 dientes de ajo',
      '4 rodajitas de jengibre',
      '½ cucharadita de sal',
      '½ cucharadita de pimienta negra',
      'Agua (hasta que cubra el pollo)',
      'Aceite vegetal']
    },
    {
      id: 3, 
      nombre: 'Ramen miso', 
      image: 'https://ramenrecetas.com/img/ramen-miso-432.jpg',
      ingredientes: [
        '4 huevos'
,'1 taza de brotes de soja'
,'280 gr de fideos ramen secos'
,'1/2 taza de brotes de bambú rebanados'
,'1/2 taza de maíz'
,'Un puñado de hojas de espinacas frescas o congeladas'
,'2 litros de caldo de verduras'
,'2 cucharaditas de dashi en polvo o dashi instantáneo'
,'1 cucharada de salsa de soja, o al gusto'
,'4 cucharadas de pasta de miso'
,'1 cebolleta finamente picada'
      ]
    },
    {
      id: 4, 
      nombre: 'entomatadas', 
      image: 'https://assets.unileversolutions.com/recipes-v2/214593.jpg?imwidth=1600',
      ingredientes: [
        '6 tomates (jitomates) rojos'
        ,'1/2 cebolla blanca'
        ,'1/2 taza de agua'
        ,'1 cucharadita de aceite'
        ,'2 cubo(s) de 10.5 gramos c/u de Knorr® Tomate'
        ,'8 tortillas de maíz'
        ,'4 cucharadas de aceite'
        ,'400 gramos de pechuga de pollo cocida y deshebrada'
        ,'1/2 taza de cebolla blanca en aros'
        ,'4 cucharadas de queso fresco rallado'
        ,'4 cucharaditas de crema'

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