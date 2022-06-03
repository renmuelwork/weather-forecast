import { Component, OnInit } from '@angular/core';
import { AuthManagerService } from 'src/managers/auth-manager/auth-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authManager: AuthManagerService ) { }

  ngOnInit(): void {
    console.log(this.authManager.user)
  }

}
