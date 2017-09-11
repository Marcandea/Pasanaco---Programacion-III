import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';

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
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
