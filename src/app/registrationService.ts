import { Injectable } from '@angular/core';
import { Registration } from './registration';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class RegistrationService{
    registrations:Registration;

    constructor(public http:HttpClient){

    }

    sendToServer(registration:Registration){
        let url="http://localhost:8181/registrationentity/add";
       return this.http.post(url,registration);
    }

    
}