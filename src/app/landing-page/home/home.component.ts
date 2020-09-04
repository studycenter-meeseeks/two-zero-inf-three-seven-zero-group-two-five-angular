import { LoginComponent } from './../../pages/authentication/login/login.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _matDialog:MatDialog
  ) { }

  ngOnInit(): void {
  }

  onLogIn(){
    const dialogRef = this._matDialog.open(LoginComponent,{
      width:'auto',
      height:'auto'
    });
  }
}
