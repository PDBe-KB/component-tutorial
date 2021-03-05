import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {TutorialComponent} from './tutorial/tutorial.component';
import {MatDialogModule} from '@angular/material';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TutorialComponent
      ],
      imports: [
        MatDialogModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('openDialog() should work', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.data = 'foo';
    app.dialog.open = function () {
      return null;
    };
    expect(app.openDialog()).toBeTruthy();
    app.data = undefined;
    expect(app.openDialog()).toBeFalsy();
  }));

});
