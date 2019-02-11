import { Component } from "@angular/core";
import { Registration } from './registration';
import { RegistrationService } from "./registrationService";



@Component({
    selector:'registration-detail',
    templateUrl:'./registration.component.html'
})

export class RegistrationComponent {
    registrations:Registration;
    response : string;
    
       constructor(private registrationService:RegistrationService) {          
       }
   
       addInformation(mform) {
          
           this.registrationService.sendToServer(this.registrations)
            .subscribe(data => {
               this.response = data.toString();
            })
               
            }
            
        }
       