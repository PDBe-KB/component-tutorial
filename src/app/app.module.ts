import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatDialogModule, MatMenuModule,
  MatRadioModule, MatCheckboxModule, MatTooltipModule
} from '@angular/material';

import {AppComponent} from './app.component';
import {TutorialComponent} from './tutorial/tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    MatRadioModule,
    MatCheckboxModule,
    MatTooltipModule
  ],
  entryComponents: [
    TutorialComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
