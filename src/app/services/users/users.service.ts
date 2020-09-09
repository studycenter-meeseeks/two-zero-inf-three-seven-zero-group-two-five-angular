import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  endpointBase = environment.endpointBase;

  constructor(private _httpClient: HttpClient) { }

  getPsychologists(){
    return this._httpClient.get(this.endpointBase.concat("Users/Psychologists/GetAll"),{observe:'events',reportProgress:true})
  }

  
}
