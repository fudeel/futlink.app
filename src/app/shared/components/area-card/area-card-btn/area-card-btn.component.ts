import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-area-card-btn',
  templateUrl: './area-card-btn.component.html',
  styleUrls: ['./area-card-btn.component.scss']
})
export class AreaCardBtnComponent implements OnInit {

  @Input() buttonText: string;
  @Input() areaCardBtnColor: string;
  @Input() routeTo: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
