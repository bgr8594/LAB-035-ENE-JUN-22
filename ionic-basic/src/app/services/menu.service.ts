import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private objetcSource = new BehaviorSubject<string>("");
  $getTitleMenu = this.objetcSource.asObservable();

  constructor() { }

  setTitle(data: any){
    this.objetcSource.next(data);
  }
}