import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-area-card',
  templateUrl: './area-card.component.html',
  styleUrls: ['./area-card.component.scss']
})
export class AreaCardComponent implements OnInit {

  @Input() imageSource: string;
  @Input() imageAlt: string;
  @Input() cardParagraphContent: string;

  constructor() { }

  ngOnInit(): void {
  }

}
