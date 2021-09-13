import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../service/authentication/authentication.service';
import { SignInData } from '../model/signInData';

@Component({
  selector: 'cf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  isFormValid = false;
  areCredentailsInvalid = false;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(signInForm: NgForm){
    if(!signInForm.valid){
      this.isFormValid = true;
      this.areCredentailsInvalid = false;
      return;
    }
    this.checkCredentails(signInForm);
  }

  private checkCredentails(signInForm: NgForm){
    const signInData = new SignInData(signInForm.value.email, signInForm.value.password);
    if(!this.authenticationService.authenticate(signInData)){
      this.isFormValid = false;
      this.areCredentailsInvalid = true;
    }
  }
}
