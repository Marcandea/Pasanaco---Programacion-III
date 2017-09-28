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

  signOut() {
    this.authService.signOut();
    this.navCtrl.setRoot(LoginPage);
  }

  getUser(){
    console.log(this.af.auth.currentUser.displayName);
  }

  
}
