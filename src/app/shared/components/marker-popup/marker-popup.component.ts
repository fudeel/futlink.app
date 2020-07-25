import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-marker-popup',
  templateUrl: './marker-popup.component.html',
  styleUrls: ['./marker-popup.component.scss']
})
export class MarkerPopupComponent implements OnInit {

  @Input() selectedMarker: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<MarkerPopupComponent>) {
  }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }
}
