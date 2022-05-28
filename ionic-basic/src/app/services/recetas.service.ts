import { Injectable } from '@angular/core';
import { receta } from '../models/receta.model';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  recetas: receta[] = [
    {
      id : 1,
      nombre : "Hummus de chipotle",
      image : "https://www.venturists.net/wp-content/uploads/2018/10/Hummus-Chile-Adobo-Sauce.jpg.webp",
      ingredientes : [
        "2 latas de garbanzo sin liquido",
        "1/2 de taza de chipotle enlatado",
        "2/3 de taza de agua",
        "2 cucharadas de aceite de oliva",
        "2 dientes de ajo cortados a la mitad",
        "1/4 de chucharada de paprika",
        "1 cucharada de sal",
        "1/4 de cuccharada de pimienta",
        "1/4 de copa de jugo de limon"
      ]
    },
    {
      id : 2,
      nombre : "Carne de puerco en mole",
      image : "https://recetas-mexicanas.com.mx/wp-content/uploads/2014/07/carne-puerco-mole-900x648.jpgS.webp",
      ingredientes : [
        "1/2 Kilogramo de carne de puerco",
        "2 Dientes de ajo pelados",
        "1 Vaso de mole poblano (Doña María)",
        "Aceite para freír",
        "Azúcar al gusto",
        "Comino al gusto",
        "Pimienta y sal al gusto"
      ]
    },
    {
      id : 3,
      nombre : "Postre Spam Musubi",
      image : "https://i1.wp.com/golososdelmundo.com/wp-content/uploads/2016/06/spam_musubi.jpg.webp",
      ingredientes : [
        "1/2 taza de salsa de soja",
        "2 cucharadas de mirin (vino de arroz)",
        "4 ½ tazas de arroz para sushi (ya cocinado)",
        "1 lata de Spam",
        "Furikake (condimento a base de algas, vegetales y pescados utilizado en platos japoneses) (opcional)",
        "3 hojas de nori",
        "Salsa de soja o mayonesa para acompañar"
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