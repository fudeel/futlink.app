import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {FutCoordinates} from '../../shared/models/FutUser';

@Component({
  selector: 'app-friendly',
  templateUrl: './friendly.component.html',
  styleUrls: ['./friendly.component.scss']
})
export class FriendlyComponent implements OnInit {

  isStepOneCompleted = false;
  lat = 0;
  lon = 0;
  showGoogleMaps = false;
  isPositionError = false;
  isPositionAlertClosed = false;

  constructor(private readonly fireAuth: AngularFireAuth, private readonly afs: AngularFirestore) {
  }

  ngOnInit(): void {
    const userUuid = JSON.parse(localStorage.getItem('userLocalStorage')).uid;

    console.log('USER UID: ', userUuid);

    this.watchPosition();
  }

  onActivatePosition(browser: string) {

    switch (browser) {
      case 'chrome':
        window.open('https://support.google.com/chrome/answer/142065?hl=en&co=GENIE.Platform%3DDesktop&oco=1');
        break;
      case 'safari':
        window.open('https://support.apple.com/en-us/HT204690');
        break;
      case 'edge':
        window.open('https://support.microsoft.com/en-us/help/4468240/windows-10-location-service-and-privacy');
        break;
      default:
        break;
    }
  }


  refreshUserData() {
    this.fireAuth.authState.subscribe(user => {
      const coordinates: FutCoordinates = {
        lat: this.lat,
        lon: this.lat
      };
      this.afs.collection('users').doc(user.uid).update({coordinates}).then(() => {

      }).catch(err => console.log('Error on updating user data: ', err)).finally(() => console.log('Done'));
    });
  }

  watchPosition() {
    navigator.geolocation.watchPosition(position => {
      console.log('position enabled');
      this.lat = position.coords.latitude;
      this.lon = position.coords.longitude;
      this.isPositionError = false;
      this.showGoogleMaps = true;


      this.refreshUserData();

    }, err => {
      console.log('position disabled');
      this.isPositionError = true;
      this.showGoogleMaps = false;
    });
  }

  onPositionAlertClosed(isClosed: boolean) {
    this.isPositionError = false;
    this.isPositionAlertClosed = isClosed;
  }

}
