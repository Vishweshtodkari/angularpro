import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostService } from '../host.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private service: HostService,  public router:Router) { }

  ngOnInit(): void {
  }
  isAuthenticated:any;
  logoutprocess(){
//   let a = this.service.user.next(false);
// this.service.login('/api').subscribe((res)=>{
//   this.isAuthenticated = res;
// });
// localStorage.removeItem('id');
// let user = this.service.user.next()

this.router.navigate(['/pat'])
// this.isAuthenticated = false;
// this.service.logout('/logout').subscribe(result=>{
//   console.log();
//    });
  }

}
