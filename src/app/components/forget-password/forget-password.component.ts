import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  Email: string;
  constructor(private router: Router,
              private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  SendEmailPassword() {
    this.afAuth.auth.sendPasswordResetEmail(this.Email)
      .then(() => {
        console.log('email sent');
      })
      .catch((error) => console.log(error));
  }
  BacktoLogin() {
    this.router.navigateByUrl('/login');
  }
}
