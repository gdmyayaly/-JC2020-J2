import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

export const firebaseConfig = {
  apiKey: "AIzaSyC7pY_o_1Vr1RrGmwAfAc4y7m73XIIIhCo",
  authDomain: "todolist-588fc.firebaseapp.com",
  databaseURL: "https://todolist-588fc.firebaseio.com",
  projectId: "todolist-588fc",
  storageBucket: "todolist-588fc.appspot.com",
  messagingSenderId: "288805328011",
  appId: "1:288805328011:web:ca168e4940fb0f663eb08e",
  measurementId: "G-GNWB9F5EZN"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
