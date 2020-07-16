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
  disabled: boolean;
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
  {name: 'Dashboard', route: 'dashboard', disabled: false, icon: 'dashboard'},
  {name: 'Friends', route: 'friends', disabled: true, icon: 'supervised_user_circle'},
  {name: 'Messages', route: 'friends', disabled: true, icon: 'message'},
  {name: 'Support', route: 'support', disabled: true, icon: 'support_agent'}
];
