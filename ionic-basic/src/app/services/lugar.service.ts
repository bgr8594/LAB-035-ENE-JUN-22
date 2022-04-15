import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Lugar } from '../models/lugar.model';

@Injectable({
  providedIn: 'root'
})
export class LugarService {

  constructor(private dbFirestore: AngularFirestore) { }

  altaLugar(lugar: Lugar){
    const lugarTemp: any ={
      nombre:lugar.nombre,
      ubicacion: {longitud:'', latitud:''}
    };
    return this.dbFirestore.collection('lugar').add(lugarTemp);
  }

  async getLugares(destinos: Lugar[]){
    const lugares = this.dbFirestore.collection('lugar');
    const snapshot = await lugares.get().toPromise().
    then(snapshot=>{
      destinos.splice(0, destinos.length);
      snapshot.forEach(doc=>{
        let data: any = doc.data();
        let lugar: Lugar = new Lugar();
        lugar.nombre = data.nombre;
        console.log(doc.id);
        destinos.push(lugar);
      });
    }).
    catch(err=>{
      console.log(err);
    });

  }

  getLugaresChanges(){
    return this.dbFirestore.collection('lugar').snapshotChanges();
  }

  updateLugares(id: any, lugar: any){
   return this.dbFirestore.collection('lugar').doc(id).update(lugar);
  }

  deleteLugar(id: any){
    return this.dbFirestore.collection('lugar').doc(id).delete();
  }
}