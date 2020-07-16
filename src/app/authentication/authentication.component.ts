import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth, User} from 'firebase';
import {Router} from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Coordinates, FutUser} from "../shared/models/FutUser";
import {AngularFirestore} from "@angular/fire/firestore";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  user: User;
  lat: number = 0
  lon: number = 0
  isPositionError = false;
  currentUser = '';

  isLoading = false;

  constructor(
    public fireAuth: AngularFireAuth,
    private readonly afs: AngularFirestore,
    private readonly router: Router,
    private readonly snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  loginWithGoogle() {
    this.fireAuth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(
        () => {
          this.isLoading = true;
          this.getCurrentUserDataAndWriteToSession();
        }
      )
      .catch(err => {
        console.log('Error on Authentication: ', err);
      });
  }


  loginWithFacebook() {
    this.fireAuth.signInWithPopup(new auth.FacebookAuthProvider())
      .then(
        () => {
          this.isLoading = true;
          this.getCurrentUserDataAndWriteToSession();
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


  getCurrentUserDataAndWriteToSession() {

    this.fireAuth.user.subscribe(
      res => {
        this.user = res;
        this.checkIfUserExistOnDb(this.user);
      }, error => {
      }, () => {
        console.log('User subscription complete')
      }
    );

  }


  checkIfUserExistOnDb(user) {
    this.afs.collection('users').doc(user.uid).valueChanges().subscribe(res => {
      if (res) {
        this.updateUserCoordinatesOnDb(user);
      } else {
        this.getCurrentUserAndWriteDataOnDbFirstTimeLogin(user);
      }
    });
  }


  getCurrentUserAndWriteDataOnDbFirstTimeLogin(user: User) {
    const futUser: FutUser = {
      uuid: user.uid,
      email: user.email,
      displayName: user.displayName,
      elo: 0,
      coordinates: {
        lat: this.lat,
        lon: this.lon
      },

    };

    this.afs.collection('users').doc(user.uid).set(futUser).then(() => {
      this.router.navigate(['private']).then(() => this.isLoading = false)
        .catch(err => {
          this.isLoading = false
          this.openSnackBar(err.toString(), 'Close');
          console.log('Error on logging in: ', err);
        })
    });
  }


  updateUserCoordinatesOnDb(user) {
    const coordinates: Coordinates = {
      lat: this.lat,
      lon: this.lon
    };
    this.afs.collection('users').doc(user.uid).update({coordinates}).then(() => {
      this.router.navigate(['private']).then(() => this.isLoading = false)
        .catch(err => {
          this.isLoading = false
          this.openSnackBar(err.toString(), 'Close');
          console.log('Error on logging in: ', err);
        })
    });
  }


  getCurrentCoordinates() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.lat = position.coords.latitude;
      this.lon = position.coords.longitude;
    }, err => {
      this.isPositionError = true;
    });
  }
}
