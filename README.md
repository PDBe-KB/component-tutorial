PDBe-KB Tutorial Component
=

[![Build Status](https://travis-ci.com/PDBe-KB/component-tutorial.svg?branch=main)](https://travis-ci.com/PDBe-KB/component-tutorial)
[![codecov](https://codecov.io/gh/PDBe-KB/component-tutorial/branch/main/graph/badge.svg?token=BkbaUkNjUw)](https://codecov.io/gh/PDBe-KB/component-tutorial)
[![Build Status](https://travis-ci.com/PDBe-KB/component-tutorial.svg?branch=main)](https://travis-ci.com/PDBe-KB/component-tutorial)

This repository is for the codebase of a lightweight Angular v7 web component that displays embedded YouTube videos. 

This component is used on the PDBe-KB Aggregated Views of Proteins to display tutorial videos which describe the various functionality of these pages.

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

## Dependencies

The main template (i.e. `index.html` by default) should also have the following CSS imports:
```angular2html
<link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.3/css/ebi-global.css" type="text/css" media="all"/>
<link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Icon-fonts/v1.3/fonts.css" type="text/css" media="all"/>
<link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.3/css/theme-pdbe-green.css" type="text/css" media="all"/>
```

## Basic usage

The component can be added to any Angular v7 apps.

#### 1.) Import the component:

Import the component in `app.module.ts` by default.
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

#### 2.) Add the component to a template:
```angular2html
<span>
  <a (click)="openDialog()" style="border-bottom-style: none;">
    <i class="icon icon-generic" data-icon="?"></i>
  </a>
</span>
```

The data model for the input data is described in 
`src/app/tutorial/tutorial.models.ts`

##### Example input data

```angular2html
{
    title: 'How to use the structural coverage section',
    text: 'This short video gives an overview of how to use ...',
    url: 'https://www.youtube.com/embed/knwZnt3i95I?autoplay=1'
}
```
## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/PDBe-KB/component-tutorial/tags).

## Authors

* **Mihaly Varadi** - *Initial Implementation* - [mvaradi](https://github.com/mvaradi)

See also the list of [contributors](https://github.com/PDBe-KB/component-tutorial/contributors) who participated in this project.

## License

This project is licensed under the EMBL-EBI License - see the [LICENSE](LICENSE) file for details

## Acknowledgements

We would like to thank the [PDBe team](https://www.pdbe.org) and the [PDBe-KB partner resources](https://github.com/PDBe-KB/pdbe-kb-manual/wiki/PDBe-KB-Annotations) for their feedback and contributions.
