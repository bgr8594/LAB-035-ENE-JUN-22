import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy , NavParams } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent} from './app.component';
import { AppRoutingModule} from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from "src/environments/environment";
import { ComponentesModule } from './componentes/componentes.module';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [ComponentesModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule, AngularFirestoreModule],
  providers: [NavParams ,HttpClientModule ,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
