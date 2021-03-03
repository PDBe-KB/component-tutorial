import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Tutorial} from './tutorial.models';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent {

  constructor(public dialogRef: MatDialogRef<TutorialComponent>,
              @Inject(MAT_DIALOG_DATA) public dialogData: Tutorial,
              public sanitizer: DomSanitizer) {
  }

  getStyle() {
    return {
      'width': window.innerWidth * 0.75 + 'px'
    };
  }

  closeDialog() {
    this.dialogRef.close('Close');
  }

}
