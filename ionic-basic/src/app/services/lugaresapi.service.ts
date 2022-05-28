import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lugar } from '../models/lugar.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LugaresapiService {

  private basePath: string ="http://localhost:8080/post";

  constructor(private http: HttpClient) { }

   // metodos de crud api
   getLugaresApi() :Observable<Lugar[]>{
    return this.http.get<any>(`${this.basePath}/list`,{});
  }

  altaLugarApi(lugar: Lugar): Observable<any>{
    return this.http.post(`${this.basePath}/add`, lugar);
  }

  borrarLugarApi(id: string): Observable<any>{
    return this.http.delete(`${this.basePath}/${id}/delete`, {});
  }

  editarLugarApi(id: string, lugar: Lugar): Observable<any>{
    return this.http.put(`${this.basePath}/${id}/update`,lugar,{});
  }
}