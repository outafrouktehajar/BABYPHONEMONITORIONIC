import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ParentPage} from '../pages/parent/parent';
import { BabyPage } from '../pages/baby/baby';
import { HoomePage} from '../pages/hoome/hoome';
import { FinPage } from '../pages/fin/fin';

import { RegisterPage } from '../pages/register/register';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule} from 'angularfire2/auth';




 const firebaseAuth = {
  apiKey: "AIzaSyABYrd38CQzzTwcPjF9oiHErBP2UTCBLNc",
  authDomain: "babyphonemonitor.firebaseapp.com",
  databaseURL: "https://babyphonemonitor.firebaseio.com",
  projectId: "babyphonemonitor",
  storageBucket: "babyphonemonitor.appspot.com",
  messagingSenderId: "332142964277"
};






@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ParentPage,
    BabyPage,
    RegisterPage,
    HoomePage,
    FinPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth), 
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ParentPage,
    BabyPage,
    RegisterPage,
    HoomePage,
    FinPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
  
  
}
