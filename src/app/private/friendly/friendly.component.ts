import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";

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

  constructor(private readonly afs: AngularFirestore) {
  }

  ngOnInit(): void {
  }


  onActivatePosition() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.lat = position.coords.latitude;
      this.lon = position.coords.longitude;

    }, err => {
      this.isPositionError = true;
    });
  }

}
