import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class GooglemapsService {

  apikey: string = environment.apikeyMaps;
  mapsloaded: boolean = false;

  constructor() { }

  init(renderer: any, document: any){


    return new Promise((resolve, reject) => {
      if(this.mapsloaded){
        console.log('google is preview loaded');
        resolve(true);
        return;
      }

      const script =renderer.createElement('script');
      script.id ="googleMaps";
      window['mapInit'] = () =>{
        this.mapsloaded = true;
        if(google){
          console.log('google is loaded');
        } else{
          console.log('google is not defined');
        }

        resolve(true);
        return;
      };


      if(this.apikey){
        script.src = 'https://maps.googleapis.com/maps/api/js?key='+this.apikey+'&callback=mapInit';
      } else{
        script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit';
      }
      renderer.appendChild(document.body, script);
    });
  }
}