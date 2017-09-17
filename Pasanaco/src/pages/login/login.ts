import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController} from 'ionic-angular';

import { AuthService } from '../../providers/auth-service';

import { UserModel } from '../../models/user-model';

import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userModel: UserModel;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public authService: AuthService) {
    this.userModel = new UserModel();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signIn() {
        let loading = this.loadingCtrl.create({
            content: 'Iniciando sesión. Por favor, espere...'
        });
        loading.present();

        this.authService.signInWithEmailAndPassword(this.userModel).then(result => {
            loading.dismiss();

            this.navCtrl.setRoot(HomePage);
        }).catch(error => {
            loading.dismiss();

            console.log(error);
            this.alert('Error', 'Ha ocurrido un error inesperado. Por favor intente nuevamente.');
        });
    }

  signUp() {
        this.navCtrl.push(SignupPage);
    }

  alert(title: string, message: string) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
  }
  

}
