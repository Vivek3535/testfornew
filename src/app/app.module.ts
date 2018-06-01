import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { loginPannel } from '../pages/loginPannel/loginPannel'; 
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    loginPannel, 
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp], 
  entryComponents: [
    MyApp,
    loginPannel,
    HomePage,
    ListPage 
  ],
  providers: [ 
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler} 
  ]
})
export class AppModule {} 
