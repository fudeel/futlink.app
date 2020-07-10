import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor(
    public fireAuth: AngularFireAuth,
    private readonly router: Router) { }

  ngOnInit(): void {
  }

  loginWithGoogle() {
    this.fireAuth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(
        () => {
          this.router.navigate(['private'])
        }
      )
      .catch(err => {
        console.log('Error on Authentication: ', err);
      });
  }
}
