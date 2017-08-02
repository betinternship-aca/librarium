import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(public dialog: MdDialog) { }
  yesClick() {}
  noClick() {
    this.dialog.closeAll();
  }

  ngOnInit() {
  }

}
