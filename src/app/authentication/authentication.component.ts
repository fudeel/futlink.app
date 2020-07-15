import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase';
import {Router} from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  isLoading = false;

  constructor(
    public fireAuth: AngularFireAuth,
    private readonly router: Router,
    private readonly snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  loginWithGoogle() {
    this.fireAuth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(
        () => {
          this.isLoading = true;
          this.router.navigate(['private']).then(() => this.isLoading = false)
            .catch(err => {
              this.isLoading = false
              this.openSnackBar(err.toString(), 'Close');
              console.log('Error on logging in: ', err);
            })
        }
      )
      .catch(err => {
        console.log('Error on Authentication: ', err);
      });
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
