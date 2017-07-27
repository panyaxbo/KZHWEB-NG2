import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  Email: string;
  Password: string;
  ConfirmPassword: string;
  constructor(private router: Router,
              private afAuth: AngularFireAuth) { }

  ngOnInit() {

  }
  ValidateEmailAndPassword() {

  }
  Signup() {
    this.ValidateEmailAndPassword();
    this.afAuth.auth.createUserWithEmailAndPassword(this.Email, this.Password)
    .then(result => {
      console.log('signup success ', result);
    })
    .catch((error: firebase.FirebaseError) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/argument-error') {

      }
    });
  }
  BacktoLogin() {
    this.router.navigateByUrl('/login');
  }
}
