import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioCService {

  private objectSource = new BehaviorSubject<{}>({});
  private listSource = new BehaviorSubject<any[]>([]);

  $getObjectSource = this.objectSource.asObservable();
  $getListSource = this.listSource.asObservable();
  
  constructor(private http: HttpClient) { }

  sendObjectSource(data: any){
    this.objectSource.next(data);
  }

  sendListSource(data: any[]){
    this.listSource.next(data);
  }

  getPersonajes() :Observable<any>{
    return this.http.get<any>(`http://swapi.dev/api/people/`,{});
  }

  getPersonaje(idPersonaje:string): Observable<any>{
    return this.http.get<any>(`http://swapi.dev/api/people/${idPersonaje}`,{});
  }
  
}