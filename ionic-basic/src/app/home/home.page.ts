import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AutserviceService } from '../services/autservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  isLoged : any = false;

  constructor(private authSvc: AutserviceService,
    private router: Router, 
    private afAuth: AngularFireAuth) {

    }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(response=>{
      this.isLoged = response;
    })
  }

  onLogout(){
    this.afAuth.auth.signOut();
    console.log("Logout!");
    this.router.navigateByUrl('/login');

  }

}