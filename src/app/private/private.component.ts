import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {User} from 'firebase';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  user: User;

  constructor(public fireAuth: AngularFireAuth,
              private readonly router: Router) { }

  ngOnInit(): void {
    this.getCurrentUserDataAndWriteToSession();
    this.getCurrentCoordinates();
  }

  getCurrentUserDataAndWriteToSession() {

    this.fireAuth.user.subscribe(
      res => {
        this.user = res;
      }
    );

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
      console.log(position.coords.latitude, position.coords.longitude);
    });
  }
}
