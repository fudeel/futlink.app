import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-activate-position',
  templateUrl: './activate-position.component.html',
  styleUrls: ['./activate-position.component.scss']
})
export class ActivatePositionComponent implements OnInit {

  @Input() isPositionError: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
