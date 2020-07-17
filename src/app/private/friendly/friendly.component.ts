import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {AngularFireAuth} from "@angular/fire/auth";
import {FutCoordinates} from "../../shared/models/FutUser";

@Component({
  selector: 'app-friendly',
  templateUrl: './friendly.component.html',
  styleUrls: ['./friendly.component.scss']
})
export class FriendlyComponent implements OnInit {

  isStepOneCompleted = false;
  lat: number = 0
  lon: number = 0
  isPositionError = false;

  constructor(private readonly fireAuth: AngularFireAuth, private readonly afs: AngularFirestore) {
  }

  ngOnInit(): void {
    const userUuid = JSON.parse(localStorage.getItem('userLocalStorage')).uid;

    console.log('USER UID: ', userUuid);

    this.watchPosition();
  }


  onActivatePosition() {
    navigator.geolocation.getCurrentPosition((position) => {
    }, err => {
      this.isPositionError = true;
    });
    this.watchPosition();
  }


  refreshUserData() {
    this.fireAuth.authState.subscribe(user => {
      const coordinates: FutCoordinates = {
        lat: this.lat,
        lon: this.lat
      };
      this.afs.collection('users').doc(user.uid).update({coordinates}).then(() => {

      }).catch(err => console.log('Error on updating user data: ', err)).finally(() => console.log('Done'));
    })
  }

  watchPosition() {
    navigator.geolocation.watchPosition(position => {
      console.log('position enabled')
      this.lat = position.coords.latitude;
      this.lon = position.coords.longitude;
      this.isPositionError = false


      this.refreshUserData();

    }, err => {
      console.log('position disabled')
      this.isPositionError = true;
    })
  }

}
