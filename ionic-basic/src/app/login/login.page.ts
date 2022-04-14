import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { AutserviceService } from '../services/autservice.service';
import { ModalErrorComponent } from '../componentes/modal-error/modal-error.component';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, Validators, FormControl, AbstractControl} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: User = new User();
  ionicForm: FormGroup;
  constructor(
    private router: Router,private autSvc: AutserviceService,
    private modalCtrl: ModalController,private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.buildForm();
  }
  async onLogin(){
    const user = await this.autSvc.onLogin(this.user);
    if(user!=null && user.code ==undefined){
      console.log('Successfully logged in!');
      this.router.navigate(['/home']);
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 650);
    }
    else{
      if(user.code){
        if(user.code=='auth/wrong-password' || user.code =='auth/invalid-email' || user.code=='auth/argument-error'){
          this.openModal(user);
        }
      }
    }
  }
  async openModal(user: any){
    const modal = await this.modalCtrl.create({
      component: ModalErrorComponent,
      componentProps:{
        error: 'Ingres password y/o contraseña'
      }
    });
    return await modal.present();
  }
  buildForm(){
    this.ionicForm = this.formBuilder.group({
      email: new FormControl('',{validators: [Validators.email,Validators.required]}),
      password: new FormControl('', {validators: [Validators.required, Validators.minLength(6), Validators.maxLength(6)]})
    });
  }
  hasError: any = (controlName: string, errorName: string) => {
		return !this.ionicForm.controls[controlName].valid &&
			this.ionicForm.controls[controlName].hasError(errorName) &&
			this.ionicForm.controls[controlName].touched;
	}
	notZero(control: AbstractControl) {
		if (control.value && control.value.monto <= 0) {
			return { 'notZero': true };
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