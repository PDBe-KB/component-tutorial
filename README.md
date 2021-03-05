PDBe-KB Tutorial Component
=

[![Build Status](https://travis-ci.com/PDBe-KB/component-tutorial.svg?branch=main)](https://travis-ci.com/PDBe-KB/component-tutorial)
[![codecov](https://codecov.io/gh/PDBe-KB/component-tutorial/branch/main/graph/badge.svg?token=BkbaUkNjUw)](https://codecov.io/gh/PDBe-KB/component-tutorial)
[![Build Status](https://travis-ci.com/PDBe-KB/component-tutorial.svg?branch=main)](https://travis-ci.com/PDBe-KB/component-tutorial)

This is the repository of a lightweight Angular 7+ web component that displays all the available PDB entries for a particular UniProt accession in a tabular format. 

This component is used on the PDBe-KB Aggregated Views of Proteins to display a table of all the UniProt accessions and processed protein identifiers (PRO id) for a particular PDB entry.

### Example:

<img src="https://raw.githubusercontent.com/PDBe-KB/component-tutorial/main/pdbe-kb-tutorial-component.png">

## Quick Start

Get the code and install dependencies
```
git clone https://github.com/PDBe-KB/component-tutorial.git
cd component-tutorial
npm i
```

Running the app
```
ng serve
```

Running tests
```
ng test
```

## Basic usage

The pinging component can be added to any Angular7+ apps.

Import the component (e.g. in app.module.ts):
```
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
```

Adding the pinging component to a template:
```angular2html
<span>
  <a (click)="openDialog()" style="border-bottom-style: none;">
    <i class="icon icon-generic" data-icon="?"></i>
  </a>
</span>

```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/PDBe-KB/component-tutorial/tags).

## Authors

* **Mihaly Varadi** - *Migrating to GitHub* - [mvaradi](https://github.com/mvaradi)

See also the list of [contributors](https://github.com/PDBe-KB/component-tutorial/contributors) who participated in this project.

## License

This project is licensed under the EMBL-EBI License - see the [LICENSE](LICENSE) file for details

## Acknowledgements

We would like to thank the [PDBe team](https://www.pdbe.org) and the [PDBe-KB partner resources](https://github.com/PDBe-KB/pdbe-kb-manual/wiki/PDBe-KB-Annotations) for their feedback and contributions.
