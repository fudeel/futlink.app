import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {

  @Input() isAdmin: boolean;


  panelOpenState = false;

  sidenavList: ListWithChildren[] = sidenavList;


  constructor() {}

  ngOnInit(): void {
  }
}

interface ListWithChildren {
  name: string;
  route: string;
  children?: ListWithChildren[];
  icon?: string;
}


/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

const sidenavList: ListWithChildren[] = [
  {name: 'Dashboard', route: 'dashboard', icon: 'dashboard'},
  {name: 'Friends', route: 'friends', icon: 'supervised_user_circle'},
  {name: 'Messages', route: 'friends', icon: 'message'},
  {name: 'Support', route: 'support', icon: 'support_agent'}
];
