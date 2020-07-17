import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, shareReplay} from "rxjs/operators";

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  isLoading = false;
  currentPage = '';

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
