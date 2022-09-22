import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { HostService } from '../host.service';
import { getAuth, createUserWithEmailAndPassword,  updateProfile } from "firebase/auth";
import * as $ from "jquery";
declare var PatternLock:any;


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;
  message: string = " ";
  userError: any;

  constructor(public fb:FormBuilder, private service: HostService, public router:Router){
  this.myForm = this.fb.group({
    email:['',[Validators.email, Validators.required]],
    password:['',[Validators.required]],
    confirmpassword:['',[Validators.required]],
    patterncode : new FormControl(''),
    confirmpattern:new FormControl('')
   },
   {
    validators:this.checkIfMatchingPassword("password","confirmpassword"),
    // validatePattern:this.pattern("pattern","confirmpattern")
  })
  }
  // pattern(patternkey:string,confirmpatternkey:string){
  //   return(group:FormGroup) =>{
  //     let pattern =group.controls[patternkey];

  //     let confirmPattern =group.controls[confirmpatternkey];
  //     if(pattern.value == confirmPattern.value){
  //       return console.log(pattern);
  //     }else{
  //       confirmPattern.setErrors({
  //         notEqualToPassword: true
  //       })
  //     }
  //   }
  //}

  checkIfMatchingPassword(passwordKey: string, confirmPasswordKey: string){
    return(group:FormGroup) =>{
      let password =group.controls[passwordKey];
      let confirmPassword =group.controls[confirmPasswordKey];

      if(password.value == confirmPassword.value){
        return;

      }else{
        confirmPassword.setErrors({
          notEqualToPassword: true
          
        })
      }

    }
  }
patchPat(){
  let dotPattern={
    patterncode : $("#patterncode").val(),
    confirmpattern : $("#patterncodeConfirm").val()
  }
  this.myForm.patchValue(dotPattern);
  console.log("dotPattern",dotPattern.patterncode);
  console.log("dotPatternConfirm",dotPattern.confirmpattern);
}


  ngOnInit(){
    let unlockpattern:any;
    let validatePattern:any = new PatternLock('#patternContainer',{
      onDraw(pattern:any){
        let result = validatePattern.setPattern()
        console.log(pattern)
        unlockpattern = validatePattern.getPattern();
       $("#patterncode").val(unlockpattern);
      }
    })
  
    let validatePattern1:any = new PatternLock('#confirmPatternContainer',{
      onDraw(pattern:any){
        console.log(pattern)
        let confirmP:any;
        confirmP = validatePattern1.getPattern();
        $("#patterncodeConfirm").val(confirmP);
        if(unlockpattern === confirmP ){
          alert("pattern confirmed");
        }
        else{
          alert("pattern not matched");
          
        }
      }
    })
  }

  onSubmit(form:any){
    const auth = getAuth();
    const user:any = auth.currentUser;
    console.log("submit function",form.value);
let pattern_lock = $("#patterncode").val();

    updateProfile(user, {
      // displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      // Profile updated!
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });

    createUserWithEmailAndPassword(auth, form.value.email, form.value.password)
    .then((userCredential) => {

      
      // Signed in 
      const user = userCredential.user;
      this.router.navigate(['products']);
      this.message = "you have been logedin successfully.";
      console.log(userCredential);

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage= error.message;
      this.message = "Email already in use."
      // ..
    });
    let singupForm = this.myForm.value;
    this.service.postFunction('/api', singupForm).subscribe(res=>{
      console.log(res)
    
    });
    
  }

}
