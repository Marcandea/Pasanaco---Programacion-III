import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service';

import { LoginPage } from '../login/login';
import { CreargrupoPage } from '../creargrupo/creargrupo';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public authService: AuthService,
    public af: AngularFireAuth
    
  ) {
  }

  idUsuario=this.af.auth.currentUser.uid;
  email=this.af.auth.currentUser.email;

  signOut() {
    this.authService.signOut();
    this.navCtrl.setRoot(LoginPage);
  }

  showUsers(){

  }

  getUser(){
    console.log(this.af.auth.currentUser.displayName);
  }

  
}
