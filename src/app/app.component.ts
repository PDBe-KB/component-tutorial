import {Component} from '@angular/core';
import {Tutorial} from './tutorial/tutorial.models';
import {TutorialComponent} from './tutorial/tutorial.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: Tutorial;

  constructor(public dialog: MatDialog) {
    this.data = {
      title: 'How to use the structural coverage section',
      text: 'This short video gives an overview of how to use the structural\ ' +
        'coverage section and the ProtVista sequence feature viewer.',
      url: 'https://www.youtube.com/embed/knwZnt3i95I?autoplay=1'
    };
  }

  openDialog() {
    /*
     * Open a dialog with an instance of the TutorialComponent
     *
     * @param category - Name of a category
     */
    this.dialog.open(TutorialComponent,
      {
        disableClose: false,
        panelClass: 'tutorial',
        data: this.data
      }
    );
    return;
  }
}
