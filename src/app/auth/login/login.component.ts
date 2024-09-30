import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //TEXT
  title : string = 'Login';
  below_title : string = 'Sign In';
  //BUTTON
  _submit_button : Boolean = false;
  

  constructor(private router : Router){}

  submit(){
    this._submit_button = true;
    
    // this.router.navigate(['/pdf-generator']);
  }

}
