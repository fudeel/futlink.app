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
  {
    name: 'Gestione',
    route: 'gestione',
    children: [
      {name: 'Numeri', route: 'numeri' },
      {name: 'Prefissi', route: 'prefissi'},
      {name: 'Piano numerazione', route: 'piano-numerazione'}
    ]
  },
  {
    name: 'Gestione Arco',
    route: 'gestione-arco',
    children: [
      {name: 'MSISDN', route: 'msisdn'},
      {name: 'Numerazione al ministero', route: 'numerazione-al-ministero'},
      {name: 'Riclico MSISDN', route: 'riciclo-msisdn'},
    ]
  },
  {
    name: 'Configurazione MVNO',
    route: 'configurazione-mvno'
  },
];
