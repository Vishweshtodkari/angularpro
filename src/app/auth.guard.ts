import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { getAuth, onAuthStateChanged } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
      // return new Promise((resolve,reject)=>{
    
      // const auth = getAuth();
      // onAuthStateChanged(auth, (user) => {
      //   if(user){
      //     resolve(true);
      //   }else{

      //     this.router.navigate(['/']);
          
      //     resolve(false);
      //   }
      // });


    // });
  }
  
  
}
