export class Lugar {
    nombre: string;

    ubicacion?:{latitud:string, longitud:string}



        constructor(){

            this.nombre=''

        }

        public setUbicacion(latitud: string, Longiutd: string){

            this.ubicacion.latitud= latitud;

            this.ubicacion.longitud = Longiutd;

        }
    }