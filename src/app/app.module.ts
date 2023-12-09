import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatButtonModule} from '@angular/material/button';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD6ZCuedFKzrVh2RKWT4BejwnVE4-jbp9w",
  authDomain: "calculator-angular-ec86b.firebaseapp.com",
  databaseURL: "https://calculator-angular-ec86b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "calculator-angular-ec86b",
  storageBucket: "calculator-angular-ec86b.appspot.com",
  messagingSenderId: "67918504913",
  appId: "1:67918504913:web:43959e19266d7eab1676f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
