import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalErrorComponent } from '../componentes/modal-error/modal-error.component';
import { User } from '../models/user.model';
import { AuthserviceService } from '../services/authservice.service';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User = new User();
  ionicForm: FormGroup;

  constructor(
    private router: Router,
    private modalController: ModalController,
    private authService: AuthserviceService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  //funcion que construye el formulario
  buildForm() {
    this.ionicForm = this.formBuilder.group({
      email: new FormControl('', {validators: [Validators.email, Validators.required]}),
      password: new FormControl('', {validators: [Validators.required, Validators.minLength(6), Validators.maxLength(20)]})
    });
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

  hasError: any = (controlName: string, errorName: string) => {
    return !this.ionicForm.controls[controlName].valid && 
    this.ionicForm.controls[controlName].hasError(errorName) &&
    this.ionicForm.controls[controlName].touched;
  }

  notZero(control: AbstractControl) {
    if(control.value && control.value.monto <= 0){
      return {'notZero': true};
    }
    return null;
  }

  submitForm(){
    if(this.ionicForm.valid){
      this.user.email = this.ionicForm.get('email').value;
      this.user.password = this.ionicForm.get('password').value;
      this.onLogin();
    }
  }
}
