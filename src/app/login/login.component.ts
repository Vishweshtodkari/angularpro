import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { HostService } from '../host.service';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  message: string = " ";
  userError: any;
  

  constructor(public fb:FormBuilder, private service: HostService, public router:Router){

  this.myForm = this.fb.group({
    email:['',[Validators.email, Validators.required]],
    password:['',[Validators.required]],
   },
   
   {
    validators:this.checkIfMatchingPassword("email","password")
  })
  }

  checkIfMatchingPassword(emailKey: string, passwordKey: string){
    // this.authService.
  }
  ngOnInit(): void {
  }

  user:any;
  onSubmit(form:any){
   
//     const auth = getAuth();

// signInWithEmailAndPassword(auth, form.value.email, form.value.password)
//   .then((data) => {
//     // Signed in 

//     this.user = data;
//     // this.user = auth.currentUser;
//     // const uid = this.user.uid;
//     this.message = "you have been logedin successfully."
//     this.router.navigate(['products'])
//     console.log(data);

//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     this.message = "please enter correct details"
//   });

  
//     // this.service.postFunction('/people', form.value).subscribe(res=>{
//     //   console.log(res)
//     // });
    
 }

  loginProcess(){
    let emval = this.myForm.value.email;
    let passval = this.myForm.value.password;
     console.log()
       this.service.login('/api').subscribe(result=>{
         const user = result.find((a:any)=>{
           return a.email === emval && a.password === passval;
         });
         if(user){
           alert("login success");
          this.router.navigate(['products']);
         }
         else{
           alert("please enter valid details");
         }
       })
     }

}
