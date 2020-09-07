import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuperService {

  endpointBase = environment.endpointBase;

  constructor(private _httpClient: HttpClient) { }

  getAllOperations() {
    return this._httpClient.get(this.endpointBase.concat("Application/Operations/GetAll"), { reportProgress: true, observe: "events" })
  }

  getAllSubSystems() {
    return this._httpClient.get(this.endpointBase.concat("Application/SubSystems/GetAll"), { reportProgress: true, observe: "events" })
  }

  getAllRolesAndPrivileges() {
    return this._httpClient.get(this.endpointBase.concat("Application/Roles/GetAll"), { reportProgress: true, observe: "events" })
  }
  createRoleAndPrivileges(payload) {
    return this._httpClient.post(this.endpointBase.concat("Application/Roles/Create"), payload, { reportProgress: true, observe: "events" })

  }

}
