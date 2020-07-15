import {Component, Input, OnInit} from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-big-icon-btn',
  templateUrl: './big-icon-btn.component.html',
  styleUrls: ['./big-icon-btn.component.scss']
})
export class BigIconBtnComponent implements OnInit {

  @Input() text: string;
  @Input() icon: 'search';
  @Input() futYellow: boolean;

  faSearch = faSearch;

  constructor() { }

  ngOnInit(): void {
  }

}
