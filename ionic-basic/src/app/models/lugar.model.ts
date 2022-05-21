export class Lugar {
    nombre: string;
    id?: string;
    ubicacion?:{latitud:string, longitud:string}
    latitud:number; 
    longitud:number;



        constructor(){
            this.nombre=''

        }

        public setUbicacion(latitud: string, Longiutd: string){

            this.ubicacion.latitud= latitud;

            this.ubicacion.longitud = Longiutd;

        }
    } 