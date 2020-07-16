import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-area-card',
  templateUrl: './area-card.component.html',
  styleUrls: ['./area-card.component.scss']
})
export class AreaCardComponent implements OnInit {

  @Input() cardTitle: string;
  @Input() cardSubTitle: string;
  @Input() imageSource: string;
  @Input() imageAlt: string;
  @Input() cardParagraphContent: string;
  @Input() buttonText: string;
  @Input() btnColor: string;
  @Input() routeTo: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
