import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor(public fireAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  loginWithGoogle() {
    this.fireAuth.signInWithPopup(new auth.GoogleAuthProvider())
      .then();
  }
}
