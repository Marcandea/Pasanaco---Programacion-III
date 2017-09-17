import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController,  AlertController} from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { Facebook } from '@ionic-native/facebook';

import { UserModel } from '../../models/user-model';

import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  userModel: UserModel;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public authService: AuthService,
    public platform: Platform,
    public facebook: Facebook) {
    this.userModel = new UserModel();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

   signUp() {
        let loading = this.loadingCtrl.create({
            content: 'Creando cuenta. Por favor, espere...'
        });
        loading.present();

        this.authService.createUserWithEmailAndPassword(this.userModel).then(result => {
            loading.dismiss();

            this.navCtrl.push(HomePage);
        }).catch(error => {
            loading.dismiss();

            console.log(error);
            this.alert('Error', 'Ha ocurrido un error inesperado. Por favor intente nuevamente.');
        });
    }

    signInWithFacebook() {
        if (this.platform.is('cordova')) {
            return this.facebook.login(['email']).then(result => {
                this.authService.signInWithFacebook(result.authResponse.accessToken).then(result => {
                    this.navCtrl.setRoot(HomePage);
                });
            });
        } else {
            return this.authService.signInWithPopup().then(result => {
                this.navCtrl.setRoot(HomePage);
            });
        }
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
