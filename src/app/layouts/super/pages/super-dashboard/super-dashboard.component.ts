import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-dashboard',
  templateUrl: './super-dashboard.component.html',
  styleUrls: ['./super-dashboard.component.scss']
})
export class SuperDashboardComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  onNavigateToRoles() {
    this._router.navigate(['/super/roles']);
  }
  
  onNavigateToPsychologists(){
    this._router.navigate(['/super/psychologists']);
  }

  onNavigateToCentres(){
    this._router.navigate(['/super/centres']);
  }

}
