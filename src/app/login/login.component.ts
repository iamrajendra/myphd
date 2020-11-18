import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor( private firebaseAuth: AuthServiceService) { }

  ngOnInit(): void {
  }

  onSubmit():void{
    console.log("LOGIN FORM INFORMATION  "+ JSON.stringify(this.loginForm.value, null, 4));
  
}
}