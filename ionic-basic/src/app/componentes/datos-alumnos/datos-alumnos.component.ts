import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.model';

@Component({
  selector: 'app-data-alumno',
  templateUrl: './datos-alumnos.component.html',
  styleUrls: ['./datos-alumnos.component.scss'],
})
export class DataAlumnoComponent implements OnInit {

  @Input() alumnosList:Alumno[];
  @Output() eliminar: any = new EventEmitter<Alumno[]>();
  @Output() editar:  any = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

}

