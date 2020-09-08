import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  endpointBase = environment.endpointBase;

  constructor(private _httpClient: HttpClient) { }

  addPsychologistt(payload) {
    return this._httpClient.post(this.endpointBase.concat("Account/Psychologist/Add"), payload, { observe: 'events', reportProgress: true });
  }

  registerPatient(payload){
    return this._httpClient.post(this.endpointBase.concat("Account/Patient/Register"), payload,
     { observe: 'events', reportProgress: true });

  }

  resendPsychologistAccountCreatedEmail(psychologistId) {
    return this._httpClient.get(this.endpointBase.concat("Account/Psychologist/ResentAccountCreated/" + psychologistId),
      { observe: 'events', reportProgress: true });
  }
}

