import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationService } from './registrationService';
import { RegistrationComponent } from './registration.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
 

@NgModule({
  declarations: [
    AppComponent,RegistrationComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule
  ],
  providers: [RegistrationService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
