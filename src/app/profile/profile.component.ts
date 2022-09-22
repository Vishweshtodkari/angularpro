import { Component, OnInit } from '@angular/core';
import { getAuth, signOut } from "firebase/auth";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any;
  photoURL:any;
  constructor() {
    const auth = getAuth();
    this.user = auth.currentUser;
    const pattern = this.user.patterncode;
    this.photoURL="https://joeschmoe.io/api/v1/jai";
   }

  ngOnInit(): void {
  }

}
