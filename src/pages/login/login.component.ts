import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { RoutingUrlEnums } from 'src/enums/paths/routing-url.enum';
import { IUser } from 'src/interfaces/user.interface';
import { AuthManagerService as AuthManagerService } from 'src/managers/auth-manager/auth-manager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public auth0: AuthService, private authManager: AuthManagerService,
    private router: Router) {}

  ngOnInit(): void {
    this.authManager.checkHasUser();
  }

  login(): void {
    // Popup window for Auth0 Login
    this.auth0.loginWithPopup().subscribe(result=>{
      this.checkUser();
    })
  }

  checkUser(){
    // Get User Information from Auth0
    this.auth0.getUser().subscribe((user:any)=>{
      this.User = user || this.authManager.checkHasUser();
      if(this.User && this.User.nickname)
        this.gotoHome();
    })
  }

  gotoHome(){
    this.router.navigate([RoutingUrlEnums.HOME])
  }

  get User(){
    return this.authManager._user;
  }
  
  set User(value:IUser) {
    this.authManager._user = value
  }
}
