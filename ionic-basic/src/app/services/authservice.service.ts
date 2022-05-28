import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  public isLoged: any = false;

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => (this.isLoged = user));
  }

  //Login
  async onLogin(user: User) {
    try {
      return await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    } catch (e) {
      console.log('Error en el Login de User',e);
      return e;
    }
  }

  //onRegister
  async onRegister(user: User) {
    try {
      return await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    } catch (e) {
      console.log('Error en el Registro de User',e);
      return e;
    }
  }

}