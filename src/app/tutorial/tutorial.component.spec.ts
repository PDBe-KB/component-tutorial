import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialComponent } from './tutorial.component';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

describe('TutorialComponent', () => {
  let component: TutorialComponent;
  let fixture: ComponentFixture<TutorialComponent>;
  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ TutorialComponent ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: mockDialogRef
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            current: 0,
            entryList: [{
              chainColor: [50, 130, 255],
              chainId: 'A',
              pdbId: '2etx',
              assemblyId: 1
            }]
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
