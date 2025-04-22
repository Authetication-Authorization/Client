import { Component } from '@angular/core';
import { RegistrationComponent } from "./registration/registration.component";
import { LoginComponent } from "./login/login.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RegistrationComponent, LoginComponent],
  templateUrl: './user.component.html',
  styles: ``
})
export class UserComponent {

}
