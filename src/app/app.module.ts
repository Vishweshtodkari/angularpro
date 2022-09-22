import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { initializeApp } from "firebase/app";
import { SecondComponent } from './second/second.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { PatComponent } from './pat/pat.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IntercepInterceptor } from './intercep.interceptor';

const firebaseConfig = {
  apiKey: "AIzaSyDSL4r2xrAUh_CN4LMcZ0gWJh7RunH0CVk",
  authDomain: "login-auth-34e9e.firebaseapp.com",
  projectId: "login-auth-34e9e",
  storageBucket: "login-auth-34e9e.appspot.com",
  messagingSenderId: "500210750126",
  appId: "1:500210750126:web:86ae2c13e09e4a5f79933f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SecondComponent,
    ProfileComponent,
    HomeComponent,
    PatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: IntercepInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
