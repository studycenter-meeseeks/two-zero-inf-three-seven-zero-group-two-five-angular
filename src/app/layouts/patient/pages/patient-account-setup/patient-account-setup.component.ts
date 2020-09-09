import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from './../../../../services/account/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-account-setup',
  templateUrl: './patient-account-setup.component.html',
  styleUrls: ['./patient-account-setup.component.scss']
})
export class PatientAccountSetupComponent implements OnInit {

  patienPersonalDetailsFormGroup:FormGroup;


  constructor(private _formBuilder:FormBuilder, private _accountService: AccountService) { }

  ngOnInit(): void {

    console.log(this._accountService.currentUser.UserName);

    this.patienPersonalDetailsFormGroup = this._formBuilder.group({
      Name:['',Validators.required],
      Surname:['',Validators.required],
      IdNumber:['',Validators.required],
      Occupation:['',Validators.required],
      GenderId:['',Validators.required],
      LevelOfEducationId:['',Validators.required],
      HomeLanguageId:['',Validators.required],
      TitleId:['',Validators.required],
    });
  }

}
