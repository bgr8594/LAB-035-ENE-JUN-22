import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { AuthserviceService } from '../services/authservice.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: User = new User();
  constructor(
        private authSvc: AuthserviceService,
        private router: Router
  ) { }
  ngOnInit(): void {
  }

  //onRegister
  async onRegister(): Promise<void> {
    const user = await this.authSvc.onRegister(this.user);
    if (user) {
      console.log('Usuario registrado');
      this.router.navigate(['/login']);
    } else {
      console.log('No se pudo registrar');
    }
  }

}