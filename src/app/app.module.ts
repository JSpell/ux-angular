import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FirebaseComponent } from './firebase/firebase.component';



export const firebaseConfig = {
  apiKey: "AIzaSyA9lIOrC2W7wLPG3xOWNjRKD2ilbz9MDY0",
    authDomain: "ux-angular.firebaseapp.com",
    databaseURL: "https://ux-angular.firebaseio.com",
    storageBucket: "ux-angular.appspot.com",
};



@NgModule({
  declarations: [
    AppComponent,
    FirebaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
