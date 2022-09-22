import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { HostService } from '../host.service';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {Router} from '@angular/router';
import * as $ from "jquery";
declare var PatternLock:any;


@Component({
  selector: 'app-pat',
  templateUrl: './pat.component.html',
  styleUrls: ['./pat.component.css']
})
export class PatComponent implements OnInit {
  myForm: FormGroup;
  message: string = " ";
  userError: any;
  

  constructor(public fb:FormBuilder, private service: HostService, public router:Router){

  this.myForm = this.fb.group({
    email:['',[Validators.email, Validators.required]],
    password:['',[Validators.required]],
    patterncode : new FormControl(''), 
   },
   
   {
    validators:this.checkIfMatchingPassword("email","password")
  })
  }

  checkIfMatchingPassword(emailKey: string, passwordKey: string){
    // this.authService.
  }
  ngOnInit(): void {
    let unlockpattern:any;
    let validatePattern:any = new PatternLock('#patternContainer',{
      onDraw(pattern:any){
        let result = validatePattern.setPattern()
        console.log(pattern)
        unlockpattern = validatePattern.getPattern();
       $("#patterncode").val(unlockpattern);
      }
    })
  }

  user:any;
  onSubmit(form:any){
   
    const auth = getAuth();

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

  
    // this.service.postFunction('/people', form.value).subscribe(res=>{
    //   console.log(res)
    // });
    
  }
  patchPat(){
    let dotPattern={
      patterncode : $("#patterncode").val(),
    }
    this.myForm.patchValue(dotPattern);
    console.log("dotPattern",dotPattern.patterncode);
  }

  loginProcess(){
   let emval = this.myForm.value.email;
   let passval = this.myForm.value.password;
   let ptrnval = this.myForm.value.patterncode;
    console.log()
      this.service.login('/api').subscribe(result=>{
        const user = result.find((a:any)=>{
          return a.email === emval && a.password === passval && a.patterncode === ptrnval;
        });
        if(user){
          alert("login success");
          this.router.navigate(['products'])
        }
        else{
          alert("please enter valid details");
        }
      })
    }
  }


