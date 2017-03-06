import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import * as firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyD8SYwKQ5pmvA2KrWupSeLJglF1FEHg5ho",
    authDomain: "ionic2facebooklogin.firebaseapp.com",
    databaseURL: "https://ionic2facebooklogin.firebaseio.com",
    storageBucket: "ionic2facebooklogin.appspot.com",
    messagingSenderId: "175096937966"
  };
  firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
