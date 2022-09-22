import { Component, OnInit } from '@angular/core';

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggedIn: boolean = false;
  user: any;

  constructor() { 
  
const auth = getAuth();
this.user = auth.currentUser;

if(this.user) {
  this.loggedIn = true;
} else {
  this.loggedIn = false;
}
onAuthStateChanged(auth, (user:any)=>{
  this.user = user;
  if(user){
    this.loggedIn = true;
  } else {
    this.loggedIn = false;
  }
})

  }

  ngOnInit(): void {
  }
 


  logout(){
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
}
