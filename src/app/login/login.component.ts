import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import {FormBuilder ,FormGroup, FormControl,Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import Utils from '../utlis'



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

  constructor( private firebaseAuth: AuthServiceService, private formBuilder: FormBuilder
   , private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
             
  }


  onSubmit():void{
    console.log(" Form is valid "+this.loginForm.valid);
    if(!this.loginForm.valid){
   Utils.alert("please enter username or password",this._snackBar);

      return;
    }

    console.log("LOGIN FORM INFORMATION  "+ JSON.stringify(this.loginForm.value, null, 4));
  
}



}