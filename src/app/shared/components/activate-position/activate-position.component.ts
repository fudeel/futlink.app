import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-activate-position',
  templateUrl: './activate-position.component.html',
  styleUrls: ['./activate-position.component.scss']
})
export class ActivatePositionComponent implements OnInit {

  @Input() isPositionError: boolean;

  @Output() isActivatePosition: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onActivatePosition() {
    this.isActivatePosition.emit(true);
  }

}
