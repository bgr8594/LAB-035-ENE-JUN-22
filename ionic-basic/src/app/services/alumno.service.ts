import { Injectable } from '@angular/core';
import {Alumno} from '../models/alumno.model';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private alumnos: Alumno[]=[];

  constructor() { }

  public agregarAlumno(alumno: Alumno){
    if(this.alumnos.length>0){
      alumno.id = this.alumnos.length + 1 ;
    } else {
      alumno.id = 1;
    }
    this.alumnos.push(alumno);
  }

  public borrarAlumno(id: number){
    this.alumnos =
    this.alumnos.filter((al=>al.id!=id));
  }

  public getAlumos(): Alumno[]{
    return this.alumnos;
  }

  public setAlumnos(alumnos: Alumno[]){
    this.alumnos = alumnos;
  }

  public actualiza(alumno: Alumno): Alumno[]{
    this.alumnos.filter(
      (al)=>al.id==alumno.id
    ).map(al=>{
      al.matricula=alumno.matricula;
      al.nombre = alumno.nombre;
    });
    return this.getAlumos();
  }
}
