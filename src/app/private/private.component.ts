import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {User} from 'firebase';
import {AngularFirestore} from '@angular/fire/firestore';
import {Coordinates, FutUser} from '../shared/models/FutUser';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, shareReplay} from "rxjs/operators";

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  user: User;
  lat: number;
  lon: number;
  isPositionError = false;

  isLoading = false;
  currentPage = '';
  currentUser = '';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              public fireAuth: AngularFireAuth,
              private readonly afs: AngularFirestore,
              private readonly router: Router) { }

  ngOnInit(): void {
    this.getCurrentUserDataAndWriteToSession();
    this.getCurrentCoordinates();
  }

  getCurrentUserDataAndWriteToSession() {

    this.fireAuth.user.subscribe(
      res => {
        this.user = res;

        this.checkIfUserExistOnDb(this.user);
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
    console.log('user: ', user);
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
    this.afs.collection('users').doc(user.uid).set(futUser);
  }

  updateUserCoordinatesOnDb(user) {
    const coordinates: Coordinates = {
      lat: this.lat,
      lon: this.lon
    };
    this.afs.collection('users').doc(user.uid).update({coordinates});
  }

  onLogout() {
    this.fireAuth.signOut().then(() => {
      this.router.navigate(['authentication']);
    })
      .catch(err => {
        console.log('Error on signin out', err);
      });
  }


  getCurrentCoordinates() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.lat =  position.coords.latitude;
      this.lon = position.coords.longitude;
    }, err => {
      this.isPositionError = true;
    });
  }
}
