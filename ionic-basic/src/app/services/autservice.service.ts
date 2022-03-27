import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AutserviceService {

  public isLoged : any = false;
  constructor(private afAuth: AngularFireAuth) { 
    afAuth.authState.subscribe(user => this.isLoged= user);
  }
  async onLogin(user: User){
    try{
      return await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    }
    catch(error){
      console.log('Error en login user', error);
      return error;
    }
  }

  //register
  async onRegister(user: User){
    try{
      return await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    }
    catch(error){
      console.log('Error en register user', error);

    }
  }
}
