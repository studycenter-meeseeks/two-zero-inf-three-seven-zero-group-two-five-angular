import { CurrentUser } from './../../types/data-types';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  endpointBase = environment.endpointBase;

  constructor(private _httpClient: HttpClient) { }

  get currentUser() {
    let token = localStorage.getItem('token');
    if (!token) return null;

    const helper = new JwtHelperService();
    return helper.decodeToken(token) as CurrentUser;

  }

  addPsychologistt(payload) {
    return this._httpClient.post(this.endpointBase.concat("Account/Psychologist/Add"), payload, { observe: 'events', reportProgress: true });
  }

  registerPatient(payload) {
    return this._httpClient.post(this.endpointBase.concat("Account/Patient/Register"), payload,
      { observe: 'events', reportProgress: true });

  }

  resendPsychologistAccountCreatedEmail(psychologistId) {
    return this._httpClient.get(this.endpointBase.concat("Account/Psychologist/ResentAccountCreated/" + psychologistId),
      { observe: 'events', reportProgress: true });
  }
}

