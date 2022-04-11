import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalErrorComponent } from '../componentes/modal-error/modal-error.component';
import { User } from '../models/user.model';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User = new User();

  constructor(
    private router: Router,
    private modalController: ModalController,
    private authService: AuthserviceService
  ) { }

  ngOnInit() {
  }

  //onLogin
  async onLogin() {
    const user = await this.authService.onLogin(this.user);
    if (user!=null && user.code == undefined) {
      console.log('Successfully logged in!');
      this.router.navigateByUrl('/home');
    } else {
      if(user.code){
        if(user.code == 'auth/wrong-password' || user.code == 'auth/invalid-email' || user.code == 'auth/argument-error'){
          this.openModal(user);
        }
      }
    }
  }

  async openModal(user: any){
    const modal = await this.modalController.create({
      component: ModalErrorComponent,
      componentProps:{
        error: 'Ingres password y/o contraseña'
      }
    });
    return await modal.present();
  }
}