import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friendly',
  templateUrl: './friendly.component.html',
  styleUrls: ['./friendly.component.scss']
})
export class FriendlyComponent implements OnInit {

  isStepOneCompleted = false;

  constructor() { }

  ngOnInit(): void {
  }

}
