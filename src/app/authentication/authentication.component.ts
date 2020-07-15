import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase';
import {Router} from '@angular/router';
import {openSnackBar} from "../shared/misc/misc";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  isLoading = false;

  constructor(
    public fireAuth: AngularFireAuth,
    private readonly router: Router) { }

  ngOnInit(): void {
  }

  loginWithGoogle() {
    this.fireAuth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(
        () => {
          this.isLoading = true;
          this.router.navigate(['private']).then(() => this.isLoading = false)
            .catch(err => {

              console.log('Error on logging in: ', err);
            })
        }
      )
      .catch(err => {
        console.log('Error on Authentication: ', err);
      });
  }
}
