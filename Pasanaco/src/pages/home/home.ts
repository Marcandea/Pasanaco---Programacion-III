import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public authService: AuthService,
    public af: AngularFireAuth,
    public alertCtrl: AlertController
    
  ) {
  }

  idUsuario=this.af.auth.currentUser.uid;
  emails=[{Usuario:this.af.auth.currentUser.email}];

  signOut() {
    this.authService.signOut();
    this.navCtrl.setRoot(LoginPage);
  }

  showUsers(){

  }

  getUser(){
    console.log(this.af.auth.currentUser.displayName);
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Futuro contenido :(',
      subTitle: 'El sistema mostrara opciones para esta actividad en un futuro, lamentamos que todovia no esten disponibles',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert2() {
    let alert = this.alertCtrl.create({
      title: 'Boton Desahabilitado',
      subTitle: 'Lamentamos que todovia no esten disponibles :(',
      buttons: ['OK']
    });
    alert.present();
  }
}
