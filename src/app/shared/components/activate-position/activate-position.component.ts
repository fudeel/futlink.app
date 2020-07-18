import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faChrome, faSafari, faEdge, faInternetExplorer} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-activate-position',
  templateUrl: './activate-position.component.html',
  styleUrls: ['./activate-position.component.scss']
})
export class ActivatePositionComponent implements OnInit {

  @Input() isPositionError: boolean;

  @Output() isActivatePosition: EventEmitter<string> = new EventEmitter<string>();
  @Output() isPositionAlertClosed: EventEmitter<boolean> = new EventEmitter<boolean>();


  faChrome = faChrome;
  faSafari = faSafari;
  faEdge = faEdge;
  faInternetExplorer = faInternetExplorer;

  constructor() {
  }

  ngOnInit(): void {
  }

  onActivatePosition(browser: string) {
    this.isActivatePosition.emit(browser);
  }

  onClosePositionAlert() {
    this.isPositionAlertClosed.emit(true);
  }

}
