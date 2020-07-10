import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() displayName: string;

  @Output() logout: EventEmitter<boolean> = new EventEmitter<boolean>();

  isCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  onLogout() {
    this.logout.emit(true);
  }

}
