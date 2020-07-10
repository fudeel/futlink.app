import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  constructor(public fireAuth: AngularFireAuth, private readonly router: Router) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.fireAuth.signOut().then(() => {
      this.router.navigate(['authentication']);
    })
      .catch(err => {
        console.log('Error on signin out', err);
      });
  }

}
