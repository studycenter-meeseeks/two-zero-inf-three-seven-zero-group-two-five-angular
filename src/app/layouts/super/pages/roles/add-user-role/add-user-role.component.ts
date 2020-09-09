import { GenericNameAndId } from './../../../../../types/data-types';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SuperService } from './../../../services/super.service'
import {  HttpEventType } from '@angular/common/http';
import { MatListOption } from '@angular/material/list';

@Component({
  selector: 'app-add-user-role',
  templateUrl: './add-user-role.component.html',
  styleUrls: ['./add-user-role.component.scss']
})
export class AddUserRoleComponent implements OnInit {
  roleDetailsFormGroup: FormGroup;
  rolePrivilegesFormGroup: FormGroup;

  operations: GenericNameAndId[];
  subSystems: GenericNameAndId[];
  selectedOperations: string[] = [];

  rolesAndPreviliges = {};

  constructor(private _formBuilder: FormBuilder, private _superService: SuperService) { }


  get Name() {
    return this.roleDetailsFormGroup.get('Name');
  }

  ngOnInit() {
    this.buildRoleDetailsForm();
    this.getOperationsFromServer();
    this.getSubSystemsFromServer();

    this.rolePrivilegesFormGroup = this._formBuilder.group({
      secondCtrl: ['']
    });

  }

  private buildRoleDetailsForm() {
    this.roleDetailsFormGroup = this._formBuilder.group({
      Name: ['', Validators.required],
    });
  }

  private getOperationsFromServer() {
    this._superService.getAllOperations().subscribe(event => {
      if (event.type === HttpEventType.Sent) {

      }
      if (event.type === HttpEventType.Response) {
        this.operations = event.body as GenericNameAndId[];
      }
    });
  }

  private getSubSystemsFromServer() {
    this._superService.getAllSubSystems().subscribe(event => {
      if (event.type === HttpEventType.Sent) {

      }
      if (event.type === HttpEventType.Response) {
        this.subSystems = event.body as GenericNameAndId[];
      }
    });
  }



  onbindOperationAndSubSystem(subSystem, operation) {
    return subSystem + ":" + operation;
  }

  onGroupsChange(options: MatListOption[]) {
    options.map(item => {
      if (this.selectedOperations.includes(item.value) == false) {
        this.selectedOperations.push(item.value);
      }
    })
  }

  onSubmit() {
    
    let privilegesArray : any=[];
    this.selectedOperations.forEach(item=>{
      let formattedItem = item.split(":");
      let privileges ={};
      privileges["SubSystem"]=formattedItem[0];
      privileges["Operation"]=formattedItem[1];
      privilegesArray.push(privileges)
    });

    this.rolesAndPreviliges["RoleName"] = this.Name.value;
    this.rolesAndPreviliges["Privileges"] = privilegesArray;


    this._superService.createRoleAndPrivileges(this.rolesAndPreviliges).subscribe(event => {
      if (event.type === HttpEventType.Sent) {

      }
      if (event.type === HttpEventType.Response) {

      }
    });

  }

}


