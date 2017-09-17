import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { CreargrupoPage } from '../pages/creargrupo/creargrupo';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from '../providers/auth-service';

import { Facebook } from '@ionic-native/facebook';

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBoBT952LGZd9jQzD30YWv-OG0sUtkfr08",
    authDomain: "pasanaco-a41cd.firebaseapp.com",
    databaseURL: "https://pasanaco-a41cd.firebaseio.com",
    projectId: "pasanaco-a41cd",
    storageBucket: "pasanaco-a41cd.appspot.com",
    messagingSenderId: "426278997319"
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    CreargrupoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    CreargrupoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    Facebook
  ]
})
export class AppModule {}
