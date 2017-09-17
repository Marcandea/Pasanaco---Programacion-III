import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service';

import { LoginPage } from '../login/login';
import { CreargrupoPage } from '../creargrupo/creargrupo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public authService: AuthService) {
  }

  signOut() {
    this.authService.signOut();
    this.navCtrl.setRoot(LoginPage);
  }

  
}
